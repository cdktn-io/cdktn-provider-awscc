# `devopsguruResourceCollection` Submodule <a name="`devopsguruResourceCollection` Submodule" id="@cdktn/provider-awscc.devopsguruResourceCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsguruResourceCollection <a name="DevopsguruResourceCollection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection awscc_devopsguru_resource_collection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollection;

DevopsguruResourceCollection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceCollectionFilter(DevopsguruResourceCollectionResourceCollectionFilter)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.resourceCollectionFilter">resourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceCollectionFilter`<sup>Required</sup> <a name="resourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.Initializer.parameter.resourceCollectionFilter"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter">putResourceCollectionFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceCollectionFilter` <a name="putResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter"></a>

```java
public void putResourceCollectionFilter(DevopsguruResourceCollectionResourceCollectionFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.putResourceCollectionFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollection;

DevopsguruResourceCollection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollection;

DevopsguruResourceCollection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollection;

DevopsguruResourceCollection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollection;

DevopsguruResourceCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DevopsguruResourceCollection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DevopsguruResourceCollection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DevopsguruResourceCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DevopsguruResourceCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DevopsguruResourceCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter">resourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType">resourceCollectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput">resourceCollectionFilterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `resourceCollectionFilter`<sup>Required</sup> <a name="resourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilter"></a>

```java
public DevopsguruResourceCollectionResourceCollectionFilterOutputReference getResourceCollectionFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference">DevopsguruResourceCollectionResourceCollectionFilterOutputReference</a>

---

##### `resourceCollectionType`<sup>Required</sup> <a name="resourceCollectionType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionType"></a>

```java
public java.lang.String getResourceCollectionType();
```

- *Type:* java.lang.String

---

##### `resourceCollectionFilterInput`<sup>Optional</sup> <a name="resourceCollectionFilterInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.resourceCollectionFilterInput"></a>

```java
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilter getResourceCollectionFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsguruResourceCollectionConfig <a name="DevopsguruResourceCollectionConfig" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionConfig;

DevopsguruResourceCollectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .resourceCollectionFilter(DevopsguruResourceCollectionResourceCollectionFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter">resourceCollectionFilter</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `resourceCollectionFilter`<sup>Required</sup> <a name="resourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionConfig.property.resourceCollectionFilter"></a>

```java
public DevopsguruResourceCollectionResourceCollectionFilter getResourceCollectionFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#resource_collection_filter DevopsguruResourceCollection#resource_collection_filter}

---

### DevopsguruResourceCollectionResourceCollectionFilter <a name="DevopsguruResourceCollectionResourceCollectionFilter" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilter;

DevopsguruResourceCollectionResourceCollectionFilter.builder()
//  .cloudformation(DevopsguruResourceCollectionResourceCollectionFilterCloudformation)
//  .tags(IResolvable|java.util.List<DevopsguruResourceCollectionResourceCollectionFilterTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | CloudFormation resource for DevOps Guru to monitor. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>></code> | Tagged resources for DevOps Guru to monitor. |

---

##### `cloudformation`<sup>Optional</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.cloudformation"></a>

```java
public DevopsguruResourceCollectionResourceCollectionFilterCloudformation getCloudformation();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

CloudFormation resource for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#cloudformation DevopsguruResourceCollection#cloudformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter.property.tags"></a>

```java
public IResolvable|java.util.List<DevopsguruResourceCollectionResourceCollectionFilterTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>>

Tagged resources for DevOps Guru to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tags DevopsguruResourceCollection#tags}

---

### DevopsguruResourceCollectionResourceCollectionFilterCloudformation <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation;

DevopsguruResourceCollectionResourceCollectionFilterCloudformation.builder()
//  .stackNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames">stackNames</a></code> | <code>java.util.List<java.lang.String></code> | An array of CloudFormation stack names. |

---

##### `stackNames`<sup>Optional</sup> <a name="stackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation.property.stackNames"></a>

```java
public java.util.List<java.lang.String> getStackNames();
```

- *Type:* java.util.List<java.lang.String>

An array of CloudFormation stack names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#stack_names DevopsguruResourceCollection#stack_names}

---

### DevopsguruResourceCollectionResourceCollectionFilterTags <a name="DevopsguruResourceCollectionResourceCollectionFilterTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilterTags;

DevopsguruResourceCollectionResourceCollectionFilterTags.builder()
//  .appBoundaryKey(java.lang.String)
//  .tagValues(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey">appBoundaryKey</a></code> | <code>java.lang.String</code> | A Tag key for DevOps Guru app boundary. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues">tagValues</a></code> | <code>java.util.List<java.lang.String></code> | Tag values of DevOps Guru app boundary. |

---

##### `appBoundaryKey`<sup>Optional</sup> <a name="appBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.appBoundaryKey"></a>

```java
public java.lang.String getAppBoundaryKey();
```

- *Type:* java.lang.String

A Tag key for DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#app_boundary_key DevopsguruResourceCollection#app_boundary_key}

---

##### `tagValues`<sup>Optional</sup> <a name="tagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags.property.tagValues"></a>

```java
public java.util.List<java.lang.String> getTagValues();
```

- *Type:* java.util.List<java.lang.String>

Tag values of DevOps Guru app boundary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/devopsguru_resource_collection#tag_values DevopsguruResourceCollection#tag_values}

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference;

new DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames">resetStackNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStackNames` <a name="resetStackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.resetStackNames"></a>

```java
public void resetStackNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput">stackNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames">stackNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stackNamesInput`<sup>Optional</sup> <a name="stackNamesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNamesInput"></a>

```java
public java.util.List<java.lang.String> getStackNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stackNames`<sup>Required</sup> <a name="stackNames" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.stackNames"></a>

```java
public java.util.List<java.lang.String> getStackNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterCloudformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference;

new DevopsguruResourceCollectionResourceCollectionFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation">putCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation">resetCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudformation` <a name="putCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation"></a>

```java
public void putCloudformation(DevopsguruResourceCollectionResourceCollectionFilterCloudformation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putCloudformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DevopsguruResourceCollectionResourceCollectionFilterTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>>

---

##### `resetCloudformation` <a name="resetCloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetCloudformation"></a>

```java
public void resetCloudformation()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation">cloudformation</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput">cloudformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudformation`<sup>Required</sup> <a name="cloudformation" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformation"></a>

```java
public DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference getCloudformation();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference">DevopsguruResourceCollectionResourceCollectionFilterCloudformationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tags"></a>

```java
public DevopsguruResourceCollectionResourceCollectionFilterTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList">DevopsguruResourceCollectionResourceCollectionFilterTagsList</a>

---

##### `cloudformationInput`<sup>Optional</sup> <a name="cloudformationInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.cloudformationInput"></a>

```java
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterCloudformation getCloudformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterCloudformation">DevopsguruResourceCollectionResourceCollectionFilterCloudformation</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DevopsguruResourceCollectionResourceCollectionFilterTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilter">DevopsguruResourceCollectionResourceCollectionFilter</a>

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsList <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsList" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilterTagsList;

new DevopsguruResourceCollectionResourceCollectionFilterTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get"></a>

```java
public DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DevopsguruResourceCollectionResourceCollectionFilterTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>>

---


### DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference <a name="DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.devopsguru_resource_collection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference;

new DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey">resetAppBoundaryKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues">resetTagValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppBoundaryKey` <a name="resetAppBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetAppBoundaryKey"></a>

```java
public void resetAppBoundaryKey()
```

##### `resetTagValues` <a name="resetTagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.resetTagValues"></a>

```java
public void resetTagValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput">appBoundaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput">tagValuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey">appBoundaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues">tagValues</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appBoundaryKeyInput`<sup>Optional</sup> <a name="appBoundaryKeyInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKeyInput"></a>

```java
public java.lang.String getAppBoundaryKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValuesInput`<sup>Optional</sup> <a name="tagValuesInput" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValuesInput"></a>

```java
public java.util.List<java.lang.String> getTagValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `appBoundaryKey`<sup>Required</sup> <a name="appBoundaryKey" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.appBoundaryKey"></a>

```java
public java.lang.String getAppBoundaryKey();
```

- *Type:* java.lang.String

---

##### `tagValues`<sup>Required</sup> <a name="tagValues" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.tagValues"></a>

```java
public java.util.List<java.lang.String> getTagValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DevopsguruResourceCollectionResourceCollectionFilterTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.devopsguruResourceCollection.DevopsguruResourceCollectionResourceCollectionFilterTags">DevopsguruResourceCollectionResourceCollectionFilterTags</a>

---



