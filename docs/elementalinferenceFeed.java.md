# `elementalinferenceFeed` Submodule <a name="`elementalinferenceFeed` Submodule" id="@cdktn/provider-awscc.elementalinferenceFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceFeed <a name="ElementalinferenceFeed" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed awscc_elementalinference_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeed;

ElementalinferenceFeed.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .outputs(IResolvable|java.util.List<ElementalinferenceFeedOutputs>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.outputs"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs"></a>

```java
public void putOutputs(IResolvable|java.util.List<ElementalinferenceFeedOutputs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.putOutputs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeed;

ElementalinferenceFeed.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeed;

ElementalinferenceFeed.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeed;

ElementalinferenceFeed.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeed;

ElementalinferenceFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ElementalinferenceFeed.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ElementalinferenceFeed resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ElementalinferenceFeed to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ElementalinferenceFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints">dataEndpoints</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId">feedId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput">outputsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `dataEndpoints`<sup>Required</sup> <a name="dataEndpoints" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.dataEndpoints"></a>

```java
public java.util.List<java.lang.String> getDataEndpoints();
```

- *Type:* java.util.List<java.lang.String>

---

##### `feedId`<sup>Required</sup> <a name="feedId" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.feedId"></a>

```java
public java.lang.String getFeedId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputs"></a>

```java
public ElementalinferenceFeedOutputsList getOutputs();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList">ElementalinferenceFeedOutputsList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.outputsInput"></a>

```java
public IResolvable|java.util.List<ElementalinferenceFeedOutputs> getOutputsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeed.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceFeedConfig <a name="ElementalinferenceFeedConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedConfig;

ElementalinferenceFeedConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .outputs(IResolvable|java.util.List<ElementalinferenceFeedOutputs>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs">outputs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.outputs"></a>

```java
public IResolvable|java.util.List<ElementalinferenceFeedOutputs> getOutputs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#outputs ElementalinferenceFeed#outputs}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#tags ElementalinferenceFeed#tags}.

---

### ElementalinferenceFeedOutputs <a name="ElementalinferenceFeedOutputs" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputs;

ElementalinferenceFeedOutputs.builder()
    .name(java.lang.String)
    .outputConfig(ElementalinferenceFeedOutputsOutputConfig)
    .status(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#name ElementalinferenceFeed#name}.

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.outputConfig"></a>

```java
public ElementalinferenceFeedOutputsOutputConfig getOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#output_config ElementalinferenceFeed#output_config}.

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#status ElementalinferenceFeed#status}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#description ElementalinferenceFeed#description}.

---

### ElementalinferenceFeedOutputsOutputConfig <a name="ElementalinferenceFeedOutputsOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfig;

ElementalinferenceFeedOutputsOutputConfig.builder()
//  .clipping(ElementalinferenceFeedOutputsOutputConfigClipping)
//  .cropping(java.lang.String)
//  .subtitling(ElementalinferenceFeedOutputsOutputConfigSubtitling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping">clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping">cropping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling">subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}. |

---

##### `clipping`<sup>Optional</sup> <a name="clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.clipping"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigClipping getClipping();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#clipping ElementalinferenceFeed#clipping}.

---

##### `cropping`<sup>Optional</sup> <a name="cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.cropping"></a>

```java
public java.lang.String getCropping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#cropping ElementalinferenceFeed#cropping}.

---

##### `subtitling`<sup>Optional</sup> <a name="subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig.property.subtitling"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigSubtitling getSubtitling();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#subtitling ElementalinferenceFeed#subtitling}.

---

### ElementalinferenceFeedOutputsOutputConfigClipping <a name="ElementalinferenceFeedOutputsOutputConfigClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigClipping;

ElementalinferenceFeedOutputsOutputConfigClipping.builder()
//  .callbackMetadata(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata">callbackMetadata</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}. |

---

##### `callbackMetadata`<sup>Optional</sup> <a name="callbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping.property.callbackMetadata"></a>

```java
public java.lang.String getCallbackMetadata();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#callback_metadata ElementalinferenceFeed#callback_metadata}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitling <a name="ElementalinferenceFeedOutputsOutputConfigSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigSubtitling;

ElementalinferenceFeedOutputsOutputConfigSubtitling.builder()
//  .aspectRatio(ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio)
//  .dictionary(java.lang.String)
//  .language(java.lang.String)
//  .profanityFilter(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio">aspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary">dictionary</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter">profanityFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}. |

---

##### `aspectRatio`<sup>Optional</sup> <a name="aspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.aspectRatio"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio getAspectRatio();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#aspect_ratio ElementalinferenceFeed#aspect_ratio}.

---

##### `dictionary`<sup>Optional</sup> <a name="dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.dictionary"></a>

```java
public java.lang.String getDictionary();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#dictionary ElementalinferenceFeed#dictionary}.

---

##### `language`<sup>Optional</sup> <a name="language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#language ElementalinferenceFeed#language}.

---

##### `profanityFilter`<sup>Optional</sup> <a name="profanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling.property.profanityFilter"></a>

```java
public java.lang.String getProfanityFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#profanity_filter ElementalinferenceFeed#profanity_filter}.

---

### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio;

ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.builder()
//  .height(java.lang.Number)
//  .width(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height">height</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width">width</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}. |

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.height"></a>

```java
public java.lang.Number getHeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#height ElementalinferenceFeed#height}.

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_feed#width ElementalinferenceFeed#width}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElementalinferenceFeedOutputsList <a name="ElementalinferenceFeedOutputsList" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsList;

new ElementalinferenceFeedOutputsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get"></a>

```java
public ElementalinferenceFeedOutputsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ElementalinferenceFeedOutputs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>>

---


### ElementalinferenceFeedOutputsOutputConfigClippingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigClippingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference;

new ElementalinferenceFeedOutputsOutputConfigClippingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata">resetCallbackMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCallbackMetadata` <a name="resetCallbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.resetCallbackMetadata"></a>

```java
public void resetCallbackMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput">callbackMetadataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata">callbackMetadata</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `callbackMetadataInput`<sup>Optional</sup> <a name="callbackMetadataInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadataInput"></a>

```java
public java.lang.String getCallbackMetadataInput();
```

- *Type:* java.lang.String

---

##### `callbackMetadata`<sup>Required</sup> <a name="callbackMetadata" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.callbackMetadata"></a>

```java
public java.lang.String getCallbackMetadata();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference.property.internalValue"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfigClipping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---


### ElementalinferenceFeedOutputsOutputConfigOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigOutputReference;

new ElementalinferenceFeedOutputsOutputConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping">putClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling">putSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping">resetClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping">resetCropping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling">resetSubtitling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClipping` <a name="putClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping"></a>

```java
public void putClipping(ElementalinferenceFeedOutputsOutputConfigClipping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putClipping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `putSubtitling` <a name="putSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling"></a>

```java
public void putSubtitling(ElementalinferenceFeedOutputsOutputConfigSubtitling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.putSubtitling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `resetClipping` <a name="resetClipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetClipping"></a>

```java
public void resetClipping()
```

##### `resetCropping` <a name="resetCropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetCropping"></a>

```java
public void resetCropping()
```

##### `resetSubtitling` <a name="resetSubtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.resetSubtitling"></a>

```java
public void resetSubtitling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping">clipping</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling">subtitling</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput">clippingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput">croppingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput">subtitlingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping">cropping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clipping`<sup>Required</sup> <a name="clipping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clipping"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigClippingOutputReference getClipping();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClippingOutputReference">ElementalinferenceFeedOutputsOutputConfigClippingOutputReference</a>

---

##### `subtitling`<sup>Required</sup> <a name="subtitling" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitling"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference getSubtitling();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference</a>

---

##### `clippingInput`<sup>Optional</sup> <a name="clippingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.clippingInput"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfigClipping getClippingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigClipping">ElementalinferenceFeedOutputsOutputConfigClipping</a>

---

##### `croppingInput`<sup>Optional</sup> <a name="croppingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.croppingInput"></a>

```java
public java.lang.String getCroppingInput();
```

- *Type:* java.lang.String

---

##### `subtitlingInput`<sup>Optional</sup> <a name="subtitlingInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.subtitlingInput"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitling getSubtitlingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---

##### `cropping`<sup>Required</sup> <a name="cropping" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.cropping"></a>

```java
public java.lang.String getCropping();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference;

new ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeight` <a name="resetHeight" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetHeight"></a>

```java
public void resetHeight()
```

##### `resetWidth` <a name="resetWidth" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.resetWidth"></a>

```java
public void resetWidth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput">heightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput">widthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height">height</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width">width</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.heightInput"></a>

```java
public java.lang.Number getHeightInput();
```

- *Type:* java.lang.Number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.widthInput"></a>

```java
public java.lang.Number getWidthInput();
```

- *Type:* java.lang.Number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.height"></a>

```java
public java.lang.Number getHeight();
```

- *Type:* java.lang.Number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.width"></a>

```java
public java.lang.Number getWidth();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference.property.internalValue"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---


### ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference <a name="ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference;

new ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio">putAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio">resetAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary">resetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage">resetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter">resetProfanityFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAspectRatio` <a name="putAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio"></a>

```java
public void putAspectRatio(ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.putAspectRatio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `resetAspectRatio` <a name="resetAspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetAspectRatio"></a>

```java
public void resetAspectRatio()
```

##### `resetDictionary` <a name="resetDictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetDictionary"></a>

```java
public void resetDictionary()
```

##### `resetLanguage` <a name="resetLanguage" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetLanguage"></a>

```java
public void resetLanguage()
```

##### `resetProfanityFilter` <a name="resetProfanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.resetProfanityFilter"></a>

```java
public void resetProfanityFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio">aspectRatio</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput">aspectRatioInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput">dictionaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput">profanityFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary">dictionary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter">profanityFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aspectRatio`<sup>Required</sup> <a name="aspectRatio" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatio"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference getAspectRatio();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatioOutputReference</a>

---

##### `aspectRatioInput`<sup>Optional</sup> <a name="aspectRatioInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.aspectRatioInput"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio getAspectRatioInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio">ElementalinferenceFeedOutputsOutputConfigSubtitlingAspectRatio</a>

---

##### `dictionaryInput`<sup>Optional</sup> <a name="dictionaryInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionaryInput"></a>

```java
public java.lang.String getDictionaryInput();
```

- *Type:* java.lang.String

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `profanityFilterInput`<sup>Optional</sup> <a name="profanityFilterInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilterInput"></a>

```java
public java.lang.String getProfanityFilterInput();
```

- *Type:* java.lang.String

---

##### `dictionary`<sup>Required</sup> <a name="dictionary" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.dictionary"></a>

```java
public java.lang.String getDictionary();
```

- *Type:* java.lang.String

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `profanityFilter`<sup>Required</sup> <a name="profanityFilter" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.profanityFilter"></a>

```java
public java.lang.String getProfanityFilter();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitlingOutputReference.property.internalValue"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfigSubtitling getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigSubtitling">ElementalinferenceFeedOutputsOutputConfigSubtitling</a>

---


### ElementalinferenceFeedOutputsOutputReference <a name="ElementalinferenceFeedOutputsOutputReference" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.elementalinference_feed.ElementalinferenceFeedOutputsOutputReference;

new ElementalinferenceFeedOutputsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig"></a>

```java
public void putOutputConfig(ElementalinferenceFeedOutputsOutputConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput">outputConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfig"></a>

```java
public ElementalinferenceFeedOutputsOutputConfigOutputReference getOutputConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfigOutputReference">ElementalinferenceFeedOutputsOutputConfigOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.outputConfigInput"></a>

```java
public IResolvable|ElementalinferenceFeedOutputsOutputConfig getOutputConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputConfig">ElementalinferenceFeedOutputsOutputConfig</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputsOutputReference.property.internalValue"></a>

```java
public IResolvable|ElementalinferenceFeedOutputs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elementalinferenceFeed.ElementalinferenceFeedOutputs">ElementalinferenceFeedOutputs</a>

---



