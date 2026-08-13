# `iotsitewiseDataset` Submodule <a name="`iotsitewiseDataset` Submodule" id="@cdktn/provider-awscc.iotsitewiseDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseDataset <a name="IotsitewiseDataset" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset awscc_iotsitewise_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDataset;

IotsitewiseDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetName(java.lang.String)
    .datasetSource(IotsitewiseDatasetDatasetSource)
//  .datasetDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<IotsitewiseDatasetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetName">datasetName</a></code> | <code>java.lang.String</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | The data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetDescription">datasetDescription</a></code> | <code>java.lang.String</code> | A description about the dataset, and its functionality. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetName"></a>

- *Type:* java.lang.String

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_name IotsitewiseDataset#dataset_name}

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetSource"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

The data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_source IotsitewiseDataset#dataset_source}

---

##### `datasetDescription`<sup>Optional</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.datasetDescription"></a>

- *Type:* java.lang.String

A description about the dataset, and its functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_description IotsitewiseDataset#dataset_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#tags IotsitewiseDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource">putDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetDatasetDescription">resetDatasetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDatasetSource` <a name="putDatasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource"></a>

```java
public void putDatasetSource(IotsitewiseDatasetDatasetSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putDatasetSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotsitewiseDatasetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>>

---

##### `resetDatasetDescription` <a name="resetDatasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetDatasetDescription"></a>

```java
public void resetDatasetDescription()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDataset;

IotsitewiseDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDataset;

IotsitewiseDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDataset;

IotsitewiseDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDataset;

IotsitewiseDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsitewiseDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsitewiseDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsitewiseDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsitewiseDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetArn">datasetArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetId">datasetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference">IotsitewiseDatasetDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList">IotsitewiseDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescriptionInput">datasetDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSourceInput">datasetSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescription">datasetDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetArn`<sup>Required</sup> <a name="datasetArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetArn"></a>

```java
public java.lang.String getDatasetArn();
```

- *Type:* java.lang.String

---

##### `datasetId`<sup>Required</sup> <a name="datasetId" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetId"></a>

```java
public java.lang.String getDatasetId();
```

- *Type:* java.lang.String

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSource"></a>

```java
public IotsitewiseDatasetDatasetSourceOutputReference getDatasetSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference">IotsitewiseDatasetDatasetSourceOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tags"></a>

```java
public IotsitewiseDatasetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList">IotsitewiseDatasetTagsList</a>

---

##### `datasetDescriptionInput`<sup>Optional</sup> <a name="datasetDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescriptionInput"></a>

```java
public java.lang.String getDatasetDescriptionInput();
```

- *Type:* java.lang.String

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `datasetSourceInput`<sup>Optional</sup> <a name="datasetSourceInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetSourceInput"></a>

```java
public IResolvable|IotsitewiseDatasetDatasetSource getDatasetSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseDatasetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>>

---

##### `datasetDescription`<sup>Required</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetDescription"></a>

```java
public java.lang.String getDatasetDescription();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseDatasetConfig <a name="IotsitewiseDatasetConfig" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetConfig;

IotsitewiseDatasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .datasetName(java.lang.String)
    .datasetSource(IotsitewiseDatasetDatasetSource)
//  .datasetDescription(java.lang.String)
//  .tags(IResolvable|java.util.List<IotsitewiseDatasetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | The data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetDescription">datasetDescription</a></code> | <code>java.lang.String</code> | A description about the dataset, and its functionality. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_name IotsitewiseDataset#dataset_name}

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetSource"></a>

```java
public IotsitewiseDatasetDatasetSource getDatasetSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

The data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_source IotsitewiseDataset#dataset_source}

---

##### `datasetDescription`<sup>Optional</sup> <a name="datasetDescription" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.datasetDescription"></a>

```java
public java.lang.String getDatasetDescription();
```

- *Type:* java.lang.String

A description about the dataset, and its functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#dataset_description IotsitewiseDataset#dataset_description}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotsitewiseDatasetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#tags IotsitewiseDataset#tags}

---

### IotsitewiseDatasetDatasetSource <a name="IotsitewiseDatasetDatasetSource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetDatasetSource;

IotsitewiseDatasetDatasetSource.builder()
    .sourceFormat(java.lang.String)
    .sourceType(java.lang.String)
//  .sourceDetail(IotsitewiseDatasetDatasetSourceSourceDetail)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | The format of the dataset source associated with the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | The type of data source for the dataset. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceDetail">sourceDetail</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | The details of the dataset source associated with the dataset. |

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

The format of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_format IotsitewiseDataset#source_format}

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

The type of data source for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_type IotsitewiseDataset#source_type}

---

##### `sourceDetail`<sup>Optional</sup> <a name="sourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource.property.sourceDetail"></a>

```java
public IotsitewiseDatasetDatasetSourceSourceDetail getSourceDetail();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

The details of the dataset source associated with the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#source_detail IotsitewiseDataset#source_detail}

---

### IotsitewiseDatasetDatasetSourceSourceDetail <a name="IotsitewiseDatasetDatasetSourceSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetDatasetSourceSourceDetail;

IotsitewiseDatasetDatasetSourceSourceDetail.builder()
//  .kendra(IotsitewiseDatasetDatasetSourceSourceDetailKendra)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | Contains details about the Kendra dataset source. |

---

##### `kendra`<sup>Optional</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail.property.kendra"></a>

```java
public IotsitewiseDatasetDatasetSourceSourceDetailKendra getKendra();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

Contains details about the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#kendra IotsitewiseDataset#kendra}

---

### IotsitewiseDatasetDatasetSourceSourceDetailKendra <a name="IotsitewiseDatasetDatasetSourceSourceDetailKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra;

IotsitewiseDatasetDatasetSourceSourceDetailKendra.builder()
//  .knowledgeBaseArn(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | The knowledgeBaseArn details for the Kendra dataset source. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | The roleARN details for the Kendra dataset source. |

---

##### `knowledgeBaseArn`<sup>Optional</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.knowledgeBaseArn"></a>

```java
public java.lang.String getKnowledgeBaseArn();
```

- *Type:* java.lang.String

The knowledgeBaseArn details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#knowledge_base_arn IotsitewiseDataset#knowledge_base_arn}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

The roleARN details for the Kendra dataset source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#role_arn IotsitewiseDataset#role_arn}

---

### IotsitewiseDatasetTags <a name="IotsitewiseDatasetTags" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetTags;

IotsitewiseDatasetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#key IotsitewiseDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_dataset#value IotsitewiseDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseDatasetDatasetSourceOutputReference <a name="IotsitewiseDatasetDatasetSourceOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetDatasetSourceOutputReference;

new IotsitewiseDatasetDatasetSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail">putSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resetSourceDetail">resetSourceDetail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceDetail` <a name="putSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail"></a>

```java
public void putSourceDetail(IotsitewiseDatasetDatasetSourceSourceDetail value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.putSourceDetail.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---

##### `resetSourceDetail` <a name="resetSourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.resetSourceDetail"></a>

```java
public void resetSourceDetail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail">sourceDetail</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetailInput">sourceDetailInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormatInput">sourceFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceDetail`<sup>Required</sup> <a name="sourceDetail" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetail"></a>

```java
public IotsitewiseDatasetDatasetSourceSourceDetailOutputReference getSourceDetail();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailOutputReference</a>

---

##### `sourceDetailInput`<sup>Optional</sup> <a name="sourceDetailInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceDetailInput"></a>

```java
public IResolvable|IotsitewiseDatasetDatasetSourceSourceDetail getSourceDetailInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormatInput"></a>

```java
public java.lang.String getSourceFormatInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseDatasetDatasetSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSource">IotsitewiseDatasetDatasetSource</a>

---


### IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference <a name="IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference;

new IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetKnowledgeBaseArn">resetKnowledgeBaseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKnowledgeBaseArn` <a name="resetKnowledgeBaseArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetKnowledgeBaseArn"></a>

```java
public void resetKnowledgeBaseArn()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArnInput">knowledgeBaseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn">knowledgeBaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseArnInput`<sup>Optional</sup> <a name="knowledgeBaseArnInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArnInput"></a>

```java
public java.lang.String getKnowledgeBaseArnInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `knowledgeBaseArn`<sup>Required</sup> <a name="knowledgeBaseArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.knowledgeBaseArn"></a>

```java
public java.lang.String getKnowledgeBaseArn();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseDatasetDatasetSourceSourceDetailKendra getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---


### IotsitewiseDatasetDatasetSourceSourceDetailOutputReference <a name="IotsitewiseDatasetDatasetSourceSourceDetailOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference;

new IotsitewiseDatasetDatasetSourceSourceDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra">putKendra</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resetKendra">resetKendra</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKendra` <a name="putKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra"></a>

```java
public void putKendra(IotsitewiseDatasetDatasetSourceSourceDetailKendra value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.putKendra.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---

##### `resetKendra` <a name="resetKendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.resetKendra"></a>

```java
public void resetKendra()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra">kendra</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendraInput">kendraInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kendra`<sup>Required</sup> <a name="kendra" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendra"></a>

```java
public IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference getKendra();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference">IotsitewiseDatasetDatasetSourceSourceDetailKendraOutputReference</a>

---

##### `kendraInput`<sup>Optional</sup> <a name="kendraInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.kendraInput"></a>

```java
public IResolvable|IotsitewiseDatasetDatasetSourceSourceDetailKendra getKendraInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailKendra">IotsitewiseDatasetDatasetSourceSourceDetailKendra</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetailOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseDatasetDatasetSourceSourceDetail getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetDatasetSourceSourceDetail">IotsitewiseDatasetDatasetSourceSourceDetail</a>

---


### IotsitewiseDatasetTagsList <a name="IotsitewiseDatasetTagsList" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetTagsList;

new IotsitewiseDatasetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get"></a>

```java
public IotsitewiseDatasetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseDatasetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>>

---


### IotsitewiseDatasetTagsOutputReference <a name="IotsitewiseDatasetTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dataset.IotsitewiseDatasetTagsOutputReference;

new IotsitewiseDatasetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseDatasetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDataset.IotsitewiseDatasetTags">IotsitewiseDatasetTags</a>

---



