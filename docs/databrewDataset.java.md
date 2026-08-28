# `databrewDataset` Submodule <a name="`databrewDataset` Submodule" id="@cdktn/provider-awscc.databrewDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabrewDataset <a name="DatabrewDataset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset awscc_databrew_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDataset;

DatabrewDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .input(DatabrewDatasetInput)
    .name(java.lang.String)
//  .format(java.lang.String)
//  .formatOptions(DatabrewDatasetFormatOptions)
//  .pathOptions(DatabrewDatasetPathOptions)
//  .source(java.lang.String)
//  .tags(IResolvable|java.util.List<DatabrewDatasetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | Input. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.format">format</a></code> | <code>java.lang.String</code> | Dataset format. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | Format options for dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.pathOptions">pathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | PathOptions. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Source type of the dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.input"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#input DatabrewDataset#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.format"></a>

- *Type:* java.lang.String

Dataset format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.formatOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

Format options for dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}

---

##### `pathOptions`<sup>Optional</sup> <a name="pathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.pathOptions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

PathOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Source type of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source DatabrewDataset#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions">putFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput">putInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions">putPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions">resetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions">resetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFormatOptions` <a name="putFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions"></a>

```java
public void putFormatOptions(DatabrewDatasetFormatOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `putInput` <a name="putInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput"></a>

```java
public void putInput(DatabrewDatasetInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `putPathOptions` <a name="putPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions"></a>

```java
public void putPathOptions(DatabrewDatasetPathOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putPathOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DatabrewDatasetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>>

---

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetFormatOptions` <a name="resetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetFormatOptions"></a>

```java
public void resetFormatOptions()
```

##### `resetPathOptions` <a name="resetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetPathOptions"></a>

```java
public void resetPathOptions()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetSource"></a>

```java
public void resetSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDataset;

DatabrewDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDataset;

DatabrewDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDataset;

DatabrewDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDataset;

DatabrewDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabrewDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatabrewDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabrewDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabrewDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatabrewDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions">pathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput">formatOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput">inputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput">pathOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `formatOptions`<sup>Required</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptions"></a>

```java
public DatabrewDatasetFormatOptionsOutputReference getFormatOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference">DatabrewDatasetFormatOptionsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.input"></a>

```java
public DatabrewDatasetInputOutputReference getInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference">DatabrewDatasetInputOutputReference</a>

---

##### `pathOptions`<sup>Required</sup> <a name="pathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptions"></a>

```java
public DatabrewDatasetPathOptionsOutputReference getPathOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference">DatabrewDatasetPathOptionsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tags"></a>

```java
public DatabrewDatasetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList">DatabrewDatasetTagsList</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `formatOptionsInput`<sup>Optional</sup> <a name="formatOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.formatOptionsInput"></a>

```java
public IResolvable|DatabrewDatasetFormatOptions getFormatOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.inputInput"></a>

```java
public IResolvable|DatabrewDatasetInput getInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathOptionsInput`<sup>Optional</sup> <a name="pathOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.pathOptionsInput"></a>

```java
public IResolvable|DatabrewDatasetPathOptions getPathOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabrewDatasetConfig <a name="DatabrewDatasetConfig" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetConfig;

DatabrewDatasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .input(DatabrewDatasetInput)
    .name(java.lang.String)
//  .format(java.lang.String)
//  .formatOptions(DatabrewDatasetFormatOptions)
//  .pathOptions(DatabrewDatasetPathOptions)
//  .source(java.lang.String)
//  .tags(IResolvable|java.util.List<DatabrewDatasetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input">input</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | Input. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Dataset name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format">format</a></code> | <code>java.lang.String</code> | Dataset format. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions">formatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | Format options for dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions">pathOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | PathOptions. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source">source</a></code> | <code>java.lang.String</code> | Source type of the dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.input"></a>

```java
public DatabrewDatasetInput getInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#input DatabrewDataset#input}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Dataset name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Dataset format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `formatOptions`<sup>Optional</sup> <a name="formatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.formatOptions"></a>

```java
public DatabrewDatasetFormatOptions getFormatOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

Format options for dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format_options DatabrewDataset#format_options}

---

##### `pathOptions`<sup>Optional</sup> <a name="pathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.pathOptions"></a>

```java
public DatabrewDatasetPathOptions getPathOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

PathOptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_options DatabrewDataset#path_options}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Source type of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source DatabrewDataset#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#tags DatabrewDataset#tags}.

---

### DatabrewDatasetFormatOptions <a name="DatabrewDatasetFormatOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptions;

DatabrewDatasetFormatOptions.builder()
//  .csv(DatabrewDatasetFormatOptionsCsv)
//  .excel(DatabrewDatasetFormatOptionsExcel)
//  .json(DatabrewDatasetFormatOptionsJson)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | Csv options. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel">excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | Json options. |

---

##### `csv`<sup>Optional</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.csv"></a>

```java
public DatabrewDatasetFormatOptionsCsv getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

Csv options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#csv DatabrewDataset#csv}

---

##### `excel`<sup>Optional</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.excel"></a>

```java
public DatabrewDatasetFormatOptionsExcel getExcel();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#excel DatabrewDataset#excel}.

---

##### `json`<sup>Optional</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions.property.json"></a>

```java
public DatabrewDatasetFormatOptionsJson getJson();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

Json options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#json DatabrewDataset#json}

---

### DatabrewDatasetFormatOptionsCsv <a name="DatabrewDatasetFormatOptionsCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsCsv;

DatabrewDatasetFormatOptionsCsv.builder()
//  .delimiter(java.lang.String)
//  .headerRow(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow">headerRow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |

---

##### `delimiter`<sup>Optional</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#delimiter DatabrewDataset#delimiter}.

---

##### `headerRow`<sup>Optional</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv.property.headerRow"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

### DatabrewDatasetFormatOptionsExcel <a name="DatabrewDatasetFormatOptionsExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsExcel;

DatabrewDatasetFormatOptionsExcel.builder()
//  .headerRow(java.lang.Boolean|IResolvable)
//  .sheetIndexes(java.util.List<java.lang.Number>)
//  .sheetNames(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow">headerRow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes">sheetIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames">sheetNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}. |

---

##### `headerRow`<sup>Optional</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.headerRow"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#header_row DatabrewDataset#header_row}.

---

##### `sheetIndexes`<sup>Optional</sup> <a name="sheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetIndexes"></a>

```java
public java.util.List<java.lang.Number> getSheetIndexes();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_indexes DatabrewDataset#sheet_indexes}.

---

##### `sheetNames`<sup>Optional</sup> <a name="sheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel.property.sheetNames"></a>

```java
public java.util.List<java.lang.String> getSheetNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#sheet_names DatabrewDataset#sheet_names}.

---

### DatabrewDatasetFormatOptionsJson <a name="DatabrewDatasetFormatOptionsJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsJson;

DatabrewDatasetFormatOptionsJson.builder()
//  .multiLine(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine">multiLine</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}. |

---

##### `multiLine`<sup>Optional</sup> <a name="multiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson.property.multiLine"></a>

```java
public java.lang.Boolean|IResolvable getMultiLine();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#multi_line DatabrewDataset#multi_line}.

---

### DatabrewDatasetInput <a name="DatabrewDatasetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInput;

DatabrewDatasetInput.builder()
//  .databaseInputDefinition(DatabrewDatasetInputDatabaseInputDefinition)
//  .dataCatalogInputDefinition(DatabrewDatasetInputDataCatalogInputDefinition)
//  .metadata(DatabrewDatasetInputMetadata)
//  .s3InputDefinition(DatabrewDatasetInputS3InputDefinition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition">databaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition">dataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition">s3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | Input location. |

---

##### `databaseInputDefinition`<sup>Optional</sup> <a name="databaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.databaseInputDefinition"></a>

```java
public DatabrewDatasetInputDatabaseInputDefinition getDatabaseInputDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_input_definition DatabrewDataset#database_input_definition}.

---

##### `dataCatalogInputDefinition`<sup>Optional</sup> <a name="dataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.dataCatalogInputDefinition"></a>

```java
public DatabrewDatasetInputDataCatalogInputDefinition getDataCatalogInputDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#data_catalog_input_definition DatabrewDataset#data_catalog_input_definition}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.metadata"></a>

```java
public DatabrewDatasetInputMetadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#metadata DatabrewDataset#metadata}.

---

##### `s3InputDefinition`<sup>Optional</sup> <a name="s3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput.property.s3InputDefinition"></a>

```java
public DatabrewDatasetInputS3InputDefinition getS3InputDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#s3_input_definition DatabrewDataset#s3_input_definition}

---

### DatabrewDatasetInputDatabaseInputDefinition <a name="DatabrewDatasetInputDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDatabaseInputDefinition;

DatabrewDatasetInputDatabaseInputDefinition.builder()
//  .databaseTableName(java.lang.String)
//  .glueConnectionName(java.lang.String)
//  .queryString(java.lang.String)
//  .tempDirectory(DatabrewDatasetInputDatabaseInputDefinitionTempDirectory)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName">databaseTableName</a></code> | <code>java.lang.String</code> | Database table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | Glue connection name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString">queryString</a></code> | <code>java.lang.String</code> | Custom SQL to run against the provided AWS Glue connection. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `databaseTableName`<sup>Optional</sup> <a name="databaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.databaseTableName"></a>

```java
public java.lang.String getDatabaseTableName();
```

- *Type:* java.lang.String

Database table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_table_name DatabrewDataset#database_table_name}

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

Glue connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#glue_connection_name DatabrewDataset#glue_connection_name}

---

##### `queryString`<sup>Optional</sup> <a name="queryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

Custom SQL to run against the provided AWS Glue connection.

This SQL will be used as the input for DataBrew projects and jobs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#query_string DatabrewDataset#query_string}

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition.property.tempDirectory"></a>

```java
public DatabrewDatasetInputDatabaseInputDefinitionTempDirectory getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDatabaseInputDefinitionTempDirectory <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory;

DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputDataCatalogInputDefinition <a name="DatabrewDatasetInputDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDataCatalogInputDefinition;

DatabrewDatasetInputDataCatalogInputDefinition.builder()
//  .catalogId(java.lang.String)
//  .databaseName(java.lang.String)
//  .tableName(java.lang.String)
//  .tempDirectory(DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | Catalog id. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Database name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Table name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | Input location. |

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

Catalog id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#catalog_id DatabrewDataset#catalog_id}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Database name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#database_name DatabrewDataset#database_name}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#table_name DatabrewDataset#table_name}

---

##### `tempDirectory`<sup>Optional</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition.property.tempDirectory"></a>

```java
public DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

Input location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#temp_directory DatabrewDataset#temp_directory}

---

### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory;

DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetInputMetadata <a name="DatabrewDatasetInputMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputMetadata;

DatabrewDatasetInputMetadata.builder()
//  .sourceArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | Arn of the source of the dataset. For e.g.: AppFlow Flow ARN. |

---

##### `sourceArn`<sup>Optional</sup> <a name="sourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

Arn of the source of the dataset. For e.g.: AppFlow Flow ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#source_arn DatabrewDataset#source_arn}

---

### DatabrewDatasetInputS3InputDefinition <a name="DatabrewDatasetInputS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputS3InputDefinition;

DatabrewDatasetInputS3InputDefinition.builder()
//  .bucket(java.lang.String)
//  .bucketOwner(java.lang.String)
//  .key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | Bucket owner. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket DatabrewDataset#bucket}.

---

##### `bucketOwner`<sup>Optional</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

Bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#bucket_owner DatabrewDataset#bucket_owner}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

### DatabrewDatasetPathOptions <a name="DatabrewDatasetPathOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptions;

DatabrewDatasetPathOptions.builder()
//  .filesLimit(DatabrewDatasetPathOptionsFilesLimit)
//  .lastModifiedDateCondition(DatabrewDatasetPathOptionsLastModifiedDateCondition)
//  .parameters(IResolvable|java.util.List<DatabrewDatasetPathOptionsParameters>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit">filesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition">lastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters">parameters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}. |

---

##### `filesLimit`<sup>Optional</sup> <a name="filesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.filesLimit"></a>

```java
public DatabrewDatasetPathOptionsFilesLimit getFilesLimit();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#files_limit DatabrewDataset#files_limit}.

---

##### `lastModifiedDateCondition`<sup>Optional</sup> <a name="lastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.lastModifiedDateCondition"></a>

```java
public DatabrewDatasetPathOptionsLastModifiedDateCondition getLastModifiedDateCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#last_modified_date_condition DatabrewDataset#last_modified_date_condition}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions.property.parameters"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsParameters> getParameters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#parameters DatabrewDataset#parameters}.

---

### DatabrewDatasetPathOptionsFilesLimit <a name="DatabrewDatasetPathOptionsFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsFilesLimit;

DatabrewDatasetPathOptionsFilesLimit.builder()
//  .maxFiles(java.lang.Number)
//  .order(java.lang.String)
//  .orderedBy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles">maxFiles</a></code> | <code>java.lang.Number</code> | Maximum number of files. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order">order</a></code> | <code>java.lang.String</code> | Order. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy">orderedBy</a></code> | <code>java.lang.String</code> | Ordered by. |

---

##### `maxFiles`<sup>Optional</sup> <a name="maxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.maxFiles"></a>

```java
public java.lang.Number getMaxFiles();
```

- *Type:* java.lang.Number

Maximum number of files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#max_files DatabrewDataset#max_files}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#order DatabrewDataset#order}

---

##### `orderedBy`<sup>Optional</sup> <a name="orderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit.property.orderedBy"></a>

```java
public java.lang.String getOrderedBy();
```

- *Type:* java.lang.String

Ordered by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#ordered_by DatabrewDataset#ordered_by}

---

### DatabrewDatasetPathOptionsLastModifiedDateCondition <a name="DatabrewDatasetPathOptionsLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsLastModifiedDateCondition;

DatabrewDatasetPathOptionsLastModifiedDateCondition.builder()
//  .expression(java.lang.String)
//  .valuesMap(IResolvable|java.util.List<DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap">valuesMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `valuesMap`<sup>Optional</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition.property.valuesMap"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap> getValuesMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap;

DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.builder()
//  .value(java.lang.String)
//  .valueReference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference">valueReference</a></code> | <code>java.lang.String</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `valueReference`<sup>Optional</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap.property.valueReference"></a>

```java
public java.lang.String getValueReference();
```

- *Type:* java.lang.String

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetPathOptionsParameters <a name="DatabrewDatasetPathOptionsParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParameters;

DatabrewDatasetPathOptionsParameters.builder()
//  .datasetParameter(DatabrewDatasetPathOptionsParametersDatasetParameter)
//  .pathParameterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter">datasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName">pathParameterName</a></code> | <code>java.lang.String</code> | Parameter name. |

---

##### `datasetParameter`<sup>Optional</sup> <a name="datasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.datasetParameter"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameter getDatasetParameter();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#dataset_parameter DatabrewDataset#dataset_parameter}.

---

##### `pathParameterName`<sup>Optional</sup> <a name="pathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters.property.pathParameterName"></a>

```java
public java.lang.String getPathParameterName();
```

- *Type:* java.lang.String

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#path_parameter_name DatabrewDataset#path_parameter_name}

---

### DatabrewDatasetPathOptionsParametersDatasetParameter <a name="DatabrewDatasetPathOptionsParametersDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameter;

DatabrewDatasetPathOptionsParametersDatasetParameter.builder()
//  .createColumn(java.lang.Boolean|IResolvable)
//  .datetimeOptions(DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions)
//  .filter(DatabrewDatasetPathOptionsParametersDatasetParameterFilter)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn">createColumn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Add the value of this parameter as a column in a dataset. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions">datetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name">name</a></code> | <code>java.lang.String</code> | Parameter name. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type">type</a></code> | <code>java.lang.String</code> | Parameter type. |

---

##### `createColumn`<sup>Optional</sup> <a name="createColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.createColumn"></a>

```java
public java.lang.Boolean|IResolvable getCreateColumn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Add the value of this parameter as a column in a dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#create_column DatabrewDataset#create_column}

---

##### `datetimeOptions`<sup>Optional</sup> <a name="datetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.datetimeOptions"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions getDatetimeOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#datetime_options DatabrewDataset#datetime_options}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.filter"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterFilter getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#filter DatabrewDataset#filter}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#name DatabrewDataset#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Parameter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#type DatabrewDataset#type}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions;

DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.builder()
//  .format(java.lang.String)
//  .localeCode(java.lang.String)
//  .timezoneOffset(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format">format</a></code> | <code>java.lang.String</code> | Date/time format of a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode">localeCode</a></code> | <code>java.lang.String</code> | Locale code for a date parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset">timezoneOffset</a></code> | <code>java.lang.String</code> | Timezone offset. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

Date/time format of a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#format DatabrewDataset#format}

---

##### `localeCode`<sup>Optional</sup> <a name="localeCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.localeCode"></a>

```java
public java.lang.String getLocaleCode();
```

- *Type:* java.lang.String

Locale code for a date parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#locale_code DatabrewDataset#locale_code}

---

##### `timezoneOffset`<sup>Optional</sup> <a name="timezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions.property.timezoneOffset"></a>

```java
public java.lang.String getTimezoneOffset();
```

- *Type:* java.lang.String

Timezone offset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#timezone_offset DatabrewDataset#timezone_offset}

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilter <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter;

DatabrewDatasetPathOptionsParametersDatasetParameterFilter.builder()
//  .expression(java.lang.String)
//  .valuesMap(IResolvable|java.util.List<DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression">expression</a></code> | <code>java.lang.String</code> | Filtering expression for a parameter. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap">valuesMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}. |

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Filtering expression for a parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#expression DatabrewDataset#expression}

---

##### `valuesMap`<sup>Optional</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter.property.valuesMap"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap> getValuesMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#values_map DatabrewDataset#values_map}.

---

### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap;

DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.builder()
//  .value(java.lang.String)
//  .valueReference(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference">valueReference</a></code> | <code>java.lang.String</code> | Variable name. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

##### `valueReference`<sup>Optional</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap.property.valueReference"></a>

```java
public java.lang.String getValueReference();
```

- *Type:* java.lang.String

Variable name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value_reference DatabrewDataset#value_reference}

---

### DatabrewDatasetTags <a name="DatabrewDatasetTags" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetTags;

DatabrewDatasetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#key DatabrewDataset#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/databrew_dataset#value DatabrewDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabrewDatasetFormatOptionsCsvOutputReference <a name="DatabrewDatasetFormatOptionsCsvOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsCsvOutputReference;

new DatabrewDatasetFormatOptionsCsvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter">resetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow">resetHeaderRow</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelimiter` <a name="resetDelimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetDelimiter"></a>

```java
public void resetDelimiter()
```

##### `resetHeaderRow` <a name="resetHeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.resetHeaderRow"></a>

```java
public void resetHeaderRow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput">delimiterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput">headerRowInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter">delimiter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow">headerRow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `delimiterInput`<sup>Optional</sup> <a name="delimiterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiterInput"></a>

```java
public java.lang.String getDelimiterInput();
```

- *Type:* java.lang.String

---

##### `headerRowInput`<sup>Optional</sup> <a name="headerRowInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRowInput"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRowInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.delimiter"></a>

```java
public java.lang.String getDelimiter();
```

- *Type:* java.lang.String

---

##### `headerRow`<sup>Required</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.headerRow"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetFormatOptionsCsv getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---


### DatabrewDatasetFormatOptionsExcelOutputReference <a name="DatabrewDatasetFormatOptionsExcelOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsExcelOutputReference;

new DatabrewDatasetFormatOptionsExcelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow">resetHeaderRow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes">resetSheetIndexes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames">resetSheetNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeaderRow` <a name="resetHeaderRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetHeaderRow"></a>

```java
public void resetHeaderRow()
```

##### `resetSheetIndexes` <a name="resetSheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetIndexes"></a>

```java
public void resetSheetIndexes()
```

##### `resetSheetNames` <a name="resetSheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.resetSheetNames"></a>

```java
public void resetSheetNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput">headerRowInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput">sheetIndexesInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput">sheetNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow">headerRow</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes">sheetIndexes</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames">sheetNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `headerRowInput`<sup>Optional</sup> <a name="headerRowInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRowInput"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRowInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sheetIndexesInput`<sup>Optional</sup> <a name="sheetIndexesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexesInput"></a>

```java
public java.util.List<java.lang.Number> getSheetIndexesInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `sheetNamesInput`<sup>Optional</sup> <a name="sheetNamesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNamesInput"></a>

```java
public java.util.List<java.lang.String> getSheetNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `headerRow`<sup>Required</sup> <a name="headerRow" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.headerRow"></a>

```java
public java.lang.Boolean|IResolvable getHeaderRow();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sheetIndexes`<sup>Required</sup> <a name="sheetIndexes" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetIndexes"></a>

```java
public java.util.List<java.lang.Number> getSheetIndexes();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `sheetNames`<sup>Required</sup> <a name="sheetNames" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.sheetNames"></a>

```java
public java.util.List<java.lang.String> getSheetNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetFormatOptionsExcel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---


### DatabrewDatasetFormatOptionsJsonOutputReference <a name="DatabrewDatasetFormatOptionsJsonOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsJsonOutputReference;

new DatabrewDatasetFormatOptionsJsonOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine">resetMultiLine</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMultiLine` <a name="resetMultiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.resetMultiLine"></a>

```java
public void resetMultiLine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput">multiLineInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine">multiLine</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `multiLineInput`<sup>Optional</sup> <a name="multiLineInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLineInput"></a>

```java
public java.lang.Boolean|IResolvable getMultiLineInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `multiLine`<sup>Required</sup> <a name="multiLine" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.multiLine"></a>

```java
public java.lang.Boolean|IResolvable getMultiLine();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetFormatOptionsJson getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---


### DatabrewDatasetFormatOptionsOutputReference <a name="DatabrewDatasetFormatOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetFormatOptionsOutputReference;

new DatabrewDatasetFormatOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv">putCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel">putExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson">putJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv">resetCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel">resetExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson">resetJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCsv` <a name="putCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv"></a>

```java
public void putCsv(DatabrewDatasetFormatOptionsCsv value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putCsv.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `putExcel` <a name="putExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel"></a>

```java
public void putExcel(DatabrewDatasetFormatOptionsExcel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putExcel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `putJson` <a name="putJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson"></a>

```java
public void putJson(DatabrewDatasetFormatOptionsJson value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.putJson.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `resetCsv` <a name="resetCsv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetCsv"></a>

```java
public void resetCsv()
```

##### `resetExcel` <a name="resetExcel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetExcel"></a>

```java
public void resetExcel()
```

##### `resetJson` <a name="resetJson" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.resetJson"></a>

```java
public void resetJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv">csv</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel">excel</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json">json</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput">csvInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput">excelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput">jsonInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csv`<sup>Required</sup> <a name="csv" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csv"></a>

```java
public DatabrewDatasetFormatOptionsCsvOutputReference getCsv();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsvOutputReference">DatabrewDatasetFormatOptionsCsvOutputReference</a>

---

##### `excel`<sup>Required</sup> <a name="excel" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excel"></a>

```java
public DatabrewDatasetFormatOptionsExcelOutputReference getExcel();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcelOutputReference">DatabrewDatasetFormatOptionsExcelOutputReference</a>

---

##### `json`<sup>Required</sup> <a name="json" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.json"></a>

```java
public DatabrewDatasetFormatOptionsJsonOutputReference getJson();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJsonOutputReference">DatabrewDatasetFormatOptionsJsonOutputReference</a>

---

##### `csvInput`<sup>Optional</sup> <a name="csvInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.csvInput"></a>

```java
public IResolvable|DatabrewDatasetFormatOptionsCsv getCsvInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsCsv">DatabrewDatasetFormatOptionsCsv</a>

---

##### `excelInput`<sup>Optional</sup> <a name="excelInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.excelInput"></a>

```java
public IResolvable|DatabrewDatasetFormatOptionsExcel getExcelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsExcel">DatabrewDatasetFormatOptionsExcel</a>

---

##### `jsonInput`<sup>Optional</sup> <a name="jsonInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.jsonInput"></a>

```java
public IResolvable|DatabrewDatasetFormatOptionsJson getJsonInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsJson">DatabrewDatasetFormatOptionsJson</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetFormatOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetFormatOptions">DatabrewDatasetFormatOptions</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference;

new DatabrewDatasetInputDatabaseInputDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName">resetDatabaseTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString">resetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory"></a>

```java
public void putTempDirectory(DatabrewDatasetInputDatabaseInputDefinitionTempDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `resetDatabaseTableName` <a name="resetDatabaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetDatabaseTableName"></a>

```java
public void resetDatabaseTableName()
```

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetGlueConnectionName"></a>

```java
public void resetGlueConnectionName()
```

##### `resetQueryString` <a name="resetQueryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetQueryString"></a>

```java
public void resetQueryString()
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.resetTempDirectory"></a>

```java
public void resetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput">databaseTableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput">queryStringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName">databaseTableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString">queryString</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectory"></a>

```java
public DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference</a>

---

##### `databaseTableNameInput`<sup>Optional</sup> <a name="databaseTableNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableNameInput"></a>

```java
public java.lang.String getDatabaseTableNameInput();
```

- *Type:* java.lang.String

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionNameInput"></a>

```java
public java.lang.String getGlueConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `queryStringInput`<sup>Optional</sup> <a name="queryStringInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryStringInput"></a>

```java
public java.lang.String getQueryStringInput();
```

- *Type:* java.lang.String

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```java
public IResolvable|DatabrewDatasetInputDatabaseInputDefinitionTempDirectory getTempDirectoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---

##### `databaseTableName`<sup>Required</sup> <a name="databaseTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.databaseTableName"></a>

```java
public java.lang.String getDatabaseTableName();
```

- *Type:* java.lang.String

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

---

##### `queryString`<sup>Required</sup> <a name="queryString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.queryString"></a>

```java
public java.lang.String getQueryString();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInputDatabaseInputDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---


### DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference;

new DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInputDatabaseInputDefinitionTempDirectory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionTempDirectory">DatabrewDatasetInputDatabaseInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference;

new DatabrewDatasetInputDataCatalogInputDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory">putTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory">resetTempDirectory</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTempDirectory` <a name="putTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory"></a>

```java
public void putTempDirectory(DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.putTempDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetCatalogId"></a>

```java
public void resetCatalogId()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetTempDirectory` <a name="resetTempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.resetTempDirectory"></a>

```java
public void resetTempDirectory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory">tempDirectory</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput">tempDirectoryInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId">catalogId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tempDirectory`<sup>Required</sup> <a name="tempDirectory" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectory"></a>

```java
public DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference getTempDirectory();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogIdInput"></a>

```java
public java.lang.String getCatalogIdInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tempDirectoryInput`<sup>Optional</sup> <a name="tempDirectoryInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tempDirectoryInput"></a>

```java
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory getTempDirectoryInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.catalogId"></a>

```java
public java.lang.String getCatalogId();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---


### DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference <a name="DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference;

new DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectoryOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory">DatabrewDatasetInputDataCatalogInputDefinitionTempDirectory</a>

---


### DatabrewDatasetInputMetadataOutputReference <a name="DatabrewDatasetInputMetadataOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputMetadataOutputReference;

new DatabrewDatasetInputMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn">resetSourceArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceArn` <a name="resetSourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.resetSourceArn"></a>

```java
public void resetSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput">sourceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn">sourceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sourceArnInput`<sup>Optional</sup> <a name="sourceArnInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArnInput"></a>

```java
public java.lang.String getSourceArnInput();
```

- *Type:* java.lang.String

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.sourceArn"></a>

```java
public java.lang.String getSourceArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInputMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---


### DatabrewDatasetInputOutputReference <a name="DatabrewDatasetInputOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputOutputReference;

new DatabrewDatasetInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition">putDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition">putDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition">putS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition">resetDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition">resetDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition">resetS3InputDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseInputDefinition` <a name="putDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition"></a>

```java
public void putDatabaseInputDefinition(DatabrewDatasetInputDatabaseInputDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDatabaseInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `putDataCatalogInputDefinition` <a name="putDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition"></a>

```java
public void putDataCatalogInputDefinition(DatabrewDatasetInputDataCatalogInputDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putDataCatalogInputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata"></a>

```java
public void putMetadata(DatabrewDatasetInputMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `putS3InputDefinition` <a name="putS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition"></a>

```java
public void putS3InputDefinition(DatabrewDatasetInputS3InputDefinition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.putS3InputDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `resetDatabaseInputDefinition` <a name="resetDatabaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDatabaseInputDefinition"></a>

```java
public void resetDatabaseInputDefinition()
```

##### `resetDataCatalogInputDefinition` <a name="resetDataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetDataCatalogInputDefinition"></a>

```java
public void resetDataCatalogInputDefinition()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetS3InputDefinition` <a name="resetS3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.resetS3InputDefinition"></a>

```java
public void resetS3InputDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition">databaseInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition">dataCatalogInputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition">s3InputDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput">databaseInputDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput">dataCatalogInputDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput">metadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput">s3InputDefinitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInputDefinition`<sup>Required</sup> <a name="databaseInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinition"></a>

```java
public DatabrewDatasetInputDatabaseInputDefinitionOutputReference getDatabaseInputDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinitionOutputReference">DatabrewDatasetInputDatabaseInputDefinitionOutputReference</a>

---

##### `dataCatalogInputDefinition`<sup>Required</sup> <a name="dataCatalogInputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinition"></a>

```java
public DatabrewDatasetInputDataCatalogInputDefinitionOutputReference getDataCatalogInputDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinitionOutputReference">DatabrewDatasetInputDataCatalogInputDefinitionOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadata"></a>

```java
public DatabrewDatasetInputMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadataOutputReference">DatabrewDatasetInputMetadataOutputReference</a>

---

##### `s3InputDefinition`<sup>Required</sup> <a name="s3InputDefinition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinition"></a>

```java
public DatabrewDatasetInputS3InputDefinitionOutputReference getS3InputDefinition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference">DatabrewDatasetInputS3InputDefinitionOutputReference</a>

---

##### `databaseInputDefinitionInput`<sup>Optional</sup> <a name="databaseInputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.databaseInputDefinitionInput"></a>

```java
public IResolvable|DatabrewDatasetInputDatabaseInputDefinition getDatabaseInputDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDatabaseInputDefinition">DatabrewDatasetInputDatabaseInputDefinition</a>

---

##### `dataCatalogInputDefinitionInput`<sup>Optional</sup> <a name="dataCatalogInputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.dataCatalogInputDefinitionInput"></a>

```java
public IResolvable|DatabrewDatasetInputDataCatalogInputDefinition getDataCatalogInputDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputDataCatalogInputDefinition">DatabrewDatasetInputDataCatalogInputDefinition</a>

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.metadataInput"></a>

```java
public IResolvable|DatabrewDatasetInputMetadata getMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputMetadata">DatabrewDatasetInputMetadata</a>

---

##### `s3InputDefinitionInput`<sup>Optional</sup> <a name="s3InputDefinitionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.s3InputDefinitionInput"></a>

```java
public IResolvable|DatabrewDatasetInputS3InputDefinition getS3InputDefinitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInput">DatabrewDatasetInput</a>

---


### DatabrewDatasetInputS3InputDefinitionOutputReference <a name="DatabrewDatasetInputS3InputDefinitionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetInputS3InputDefinitionOutputReference;

new DatabrewDatasetInputS3InputDefinitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner">resetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucket"></a>

```java
public void resetBucket()
```

##### `resetBucketOwner` <a name="resetBucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetBucketOwner"></a>

```java
public void resetBucketOwner()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.resetKey"></a>

```java
public void resetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput">bucketOwnerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner">bucketOwner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `bucketOwnerInput`<sup>Optional</sup> <a name="bucketOwnerInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwnerInput"></a>

```java
public java.lang.String getBucketOwnerInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `bucketOwner`<sup>Required</sup> <a name="bucketOwner" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.bucketOwner"></a>

```java
public java.lang.String getBucketOwner();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinitionOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetInputS3InputDefinition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetInputS3InputDefinition">DatabrewDatasetInputS3InputDefinition</a>

---


### DatabrewDatasetPathOptionsFilesLimitOutputReference <a name="DatabrewDatasetPathOptionsFilesLimitOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsFilesLimitOutputReference;

new DatabrewDatasetPathOptionsFilesLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles">resetMaxFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy">resetOrderedBy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxFiles` <a name="resetMaxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetMaxFiles"></a>

```java
public void resetMaxFiles()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetOrderedBy` <a name="resetOrderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.resetOrderedBy"></a>

```java
public void resetOrderedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput">maxFilesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput">orderedByInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles">maxFiles</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy">orderedBy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxFilesInput`<sup>Optional</sup> <a name="maxFilesInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFilesInput"></a>

```java
public java.lang.Number getMaxFilesInput();
```

- *Type:* java.lang.Number

---

##### `orderedByInput`<sup>Optional</sup> <a name="orderedByInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedByInput"></a>

```java
public java.lang.String getOrderedByInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `maxFiles`<sup>Required</sup> <a name="maxFiles" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.maxFiles"></a>

```java
public java.lang.Number getMaxFiles();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `orderedBy`<sup>Required</sup> <a name="orderedBy" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.orderedBy"></a>

```java
public java.lang.String getOrderedBy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsFilesLimit getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference;

new DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap">putValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap">resetValuesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValuesMap` <a name="putValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap"></a>

```java
public void putValuesMap(IResolvable|java.util.List<DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.putValuesMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>>

---

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetValuesMap` <a name="resetValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.resetValuesMap"></a>

```java
public void resetValuesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap">valuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput">valuesMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesMap`<sup>Required</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMap"></a>

```java
public DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList getValuesMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `valuesMapInput`<sup>Optional</sup> <a name="valuesMapInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.valuesMapInput"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap> getValuesMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList;

new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get"></a>

```java
public DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>>

---


### DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference <a name="DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference;

new DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference">resetValueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueReference` <a name="resetValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.resetValueReference"></a>

```java
public void resetValueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput">valueReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference">valueReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueReferenceInput`<sup>Optional</sup> <a name="valueReferenceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReferenceInput"></a>

```java
public java.lang.String getValueReferenceInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueReference`<sup>Required</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.valueReference"></a>

```java
public java.lang.String getValueReference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMapOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap">DatabrewDatasetPathOptionsLastModifiedDateConditionValuesMap</a>

---


### DatabrewDatasetPathOptionsOutputReference <a name="DatabrewDatasetPathOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsOutputReference;

new DatabrewDatasetPathOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit">putFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition">putLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit">resetFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition">resetLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilesLimit` <a name="putFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit"></a>

```java
public void putFilesLimit(DatabrewDatasetPathOptionsFilesLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putFilesLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `putLastModifiedDateCondition` <a name="putLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition"></a>

```java
public void putLastModifiedDateCondition(DatabrewDatasetPathOptionsLastModifiedDateCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putLastModifiedDateCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters"></a>

```java
public void putParameters(IResolvable|java.util.List<DatabrewDatasetPathOptionsParameters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.putParameters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>>

---

##### `resetFilesLimit` <a name="resetFilesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetFilesLimit"></a>

```java
public void resetFilesLimit()
```

##### `resetLastModifiedDateCondition` <a name="resetLastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetLastModifiedDateCondition"></a>

```java
public void resetLastModifiedDateCondition()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.resetParameters"></a>

```java
public void resetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit">filesLimit</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition">lastModifiedDateCondition</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput">filesLimitInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput">lastModifiedDateConditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesLimit`<sup>Required</sup> <a name="filesLimit" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimit"></a>

```java
public DatabrewDatasetPathOptionsFilesLimitOutputReference getFilesLimit();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimitOutputReference">DatabrewDatasetPathOptionsFilesLimitOutputReference</a>

---

##### `lastModifiedDateCondition`<sup>Required</sup> <a name="lastModifiedDateCondition" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateCondition"></a>

```java
public DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference getLastModifiedDateCondition();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference">DatabrewDatasetPathOptionsLastModifiedDateConditionOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parameters"></a>

```java
public DatabrewDatasetPathOptionsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList">DatabrewDatasetPathOptionsParametersList</a>

---

##### `filesLimitInput`<sup>Optional</sup> <a name="filesLimitInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.filesLimitInput"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsFilesLimit getFilesLimitInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsFilesLimit">DatabrewDatasetPathOptionsFilesLimit</a>

---

##### `lastModifiedDateConditionInput`<sup>Optional</sup> <a name="lastModifiedDateConditionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.lastModifiedDateConditionInput"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsLastModifiedDateCondition getLastModifiedDateConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsLastModifiedDateCondition">DatabrewDatasetPathOptionsLastModifiedDateCondition</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.parametersInput"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsParameters> getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptions">DatabrewDatasetPathOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference;

new DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode">resetLocaleCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset">resetTimezoneOffset</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetLocaleCode` <a name="resetLocaleCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetLocaleCode"></a>

```java
public void resetLocaleCode()
```

##### `resetTimezoneOffset` <a name="resetTimezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.resetTimezoneOffset"></a>

```java
public void resetTimezoneOffset()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput">formatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput">localeCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput">timezoneOffsetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format">format</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode">localeCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset">timezoneOffset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.formatInput"></a>

```java
public java.lang.String getFormatInput();
```

- *Type:* java.lang.String

---

##### `localeCodeInput`<sup>Optional</sup> <a name="localeCodeInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCodeInput"></a>

```java
public java.lang.String getLocaleCodeInput();
```

- *Type:* java.lang.String

---

##### `timezoneOffsetInput`<sup>Optional</sup> <a name="timezoneOffsetInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffsetInput"></a>

```java
public java.lang.String getTimezoneOffsetInput();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.format"></a>

```java
public java.lang.String getFormat();
```

- *Type:* java.lang.String

---

##### `localeCode`<sup>Required</sup> <a name="localeCode" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.localeCode"></a>

```java
public java.lang.String getLocaleCode();
```

- *Type:* java.lang.String

---

##### `timezoneOffset`<sup>Required</sup> <a name="timezoneOffset" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.timezoneOffset"></a>

```java
public java.lang.String getTimezoneOffset();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap">putValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap">resetValuesMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValuesMap` <a name="putValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap"></a>

```java
public void putValuesMap(IResolvable|java.util.List<DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.putValuesMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>>

---

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetExpression"></a>

```java
public void resetExpression()
```

##### `resetValuesMap` <a name="resetValuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.resetValuesMap"></a>

```java
public void resetValuesMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap">valuesMap</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput">valuesMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valuesMap`<sup>Required</sup> <a name="valuesMap" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMap"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList getValuesMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `valuesMapInput`<sup>Optional</sup> <a name="valuesMapInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.valuesMapInput"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap> getValuesMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>>

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference;

new DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference">resetValueReference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueReference` <a name="resetValueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.resetValueReference"></a>

```java
public void resetValueReference()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput">valueReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference">valueReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueReferenceInput`<sup>Optional</sup> <a name="valueReferenceInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReferenceInput"></a>

```java
public java.lang.String getValueReferenceInput();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueReference`<sup>Required</sup> <a name="valueReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.valueReference"></a>

```java
public java.lang.String getValueReference();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMapOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap">DatabrewDatasetPathOptionsParametersDatasetParameterFilterValuesMap</a>

---


### DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference <a name="DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference;

new DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions">putDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn">resetCreateColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions">resetDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatetimeOptions` <a name="putDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions"></a>

```java
public void putDatetimeOptions(DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putDatetimeOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `putFilter` <a name="putFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter"></a>

```java
public void putFilter(DatabrewDatasetPathOptionsParametersDatasetParameterFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `resetCreateColumn` <a name="resetCreateColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetCreateColumn"></a>

```java
public void resetCreateColumn()
```

##### `resetDatetimeOptions` <a name="resetDatetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetDatetimeOptions"></a>

```java
public void resetDatetimeOptions()
```

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions">datetimeOptions</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput">createColumnInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput">datetimeOptionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn">createColumn</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datetimeOptions`<sup>Required</sup> <a name="datetimeOptions" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptions"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference getDatetimeOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptionsOutputReference</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filter"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference getFilter();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterFilterOutputReference</a>

---

##### `createColumnInput`<sup>Optional</sup> <a name="createColumnInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumnInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateColumnInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `datetimeOptionsInput`<sup>Optional</sup> <a name="datetimeOptionsInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.datetimeOptionsInput"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions getDatetimeOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions">DatabrewDatasetPathOptionsParametersDatasetParameterDatetimeOptions</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.filterInput"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameterFilter getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterFilter">DatabrewDatasetPathOptionsParametersDatasetParameterFilter</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `createColumn`<sup>Required</sup> <a name="createColumn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.createColumn"></a>

```java
public java.lang.Boolean|IResolvable getCreateColumn();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---


### DatabrewDatasetPathOptionsParametersList <a name="DatabrewDatasetPathOptionsParametersList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersList;

new DatabrewDatasetPathOptionsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get"></a>

```java
public DatabrewDatasetPathOptionsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetPathOptionsParameters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>>

---


### DatabrewDatasetPathOptionsParametersOutputReference <a name="DatabrewDatasetPathOptionsParametersOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetPathOptionsParametersOutputReference;

new DatabrewDatasetPathOptionsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter">putDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter">resetDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName">resetPathParameterName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetParameter` <a name="putDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter"></a>

```java
public void putDatasetParameter(DatabrewDatasetPathOptionsParametersDatasetParameter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.putDatasetParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `resetDatasetParameter` <a name="resetDatasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetDatasetParameter"></a>

```java
public void resetDatasetParameter()
```

##### `resetPathParameterName` <a name="resetPathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.resetPathParameterName"></a>

```java
public void resetPathParameterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter">datasetParameter</a></code> | <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput">datasetParameterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput">pathParameterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName">pathParameterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetParameter`<sup>Required</sup> <a name="datasetParameter" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameter"></a>

```java
public DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference getDatasetParameter();
```

- *Type:* <a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference">DatabrewDatasetPathOptionsParametersDatasetParameterOutputReference</a>

---

##### `datasetParameterInput`<sup>Optional</sup> <a name="datasetParameterInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.datasetParameterInput"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParametersDatasetParameter getDatasetParameterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersDatasetParameter">DatabrewDatasetPathOptionsParametersDatasetParameter</a>

---

##### `pathParameterNameInput`<sup>Optional</sup> <a name="pathParameterNameInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterNameInput"></a>

```java
public java.lang.String getPathParameterNameInput();
```

- *Type:* java.lang.String

---

##### `pathParameterName`<sup>Required</sup> <a name="pathParameterName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.pathParameterName"></a>

```java
public java.lang.String getPathParameterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetPathOptionsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetPathOptionsParameters">DatabrewDatasetPathOptionsParameters</a>

---


### DatabrewDatasetTagsList <a name="DatabrewDatasetTagsList" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetTagsList;

new DatabrewDatasetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get"></a>

```java
public DatabrewDatasetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatabrewDatasetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>>

---


### DatabrewDatasetTagsOutputReference <a name="DatabrewDatasetTagsOutputReference" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.databrew_dataset.DatabrewDatasetTagsOutputReference;

new DatabrewDatasetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatabrewDatasetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.databrewDataset.DatabrewDatasetTags">DatabrewDatasetTags</a>

---



