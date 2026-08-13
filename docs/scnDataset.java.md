# `scnDataset` Submodule <a name="`scnDataset` Submodule" id="@cdktn/provider-awscc.scnDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScnDataset <a name="ScnDataset" id="@cdktn/provider-awscc.scnDataset.ScnDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset awscc_scn_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDataset;

ScnDataset.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .description(java.lang.String)
//  .partitionSpec(ScnDatasetPartitionSpec)
//  .schema(ScnDatasetSchema)
//  .tags(IResolvable|java.util.List<ScnDatasetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | The partition specification of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | The schema of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>></code> | The tags for the dataset. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#instance_id ScnDataset#instance_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

The namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#namespace ScnDataset#namespace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#description ScnDataset#description}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.partitionSpec"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

The partition specification of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#partition_spec ScnDataset#partition_spec}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

The schema of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#schema ScnDataset#schema}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>>

The tags for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#tags ScnDataset#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.scnDataset.ScnDataset.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.scnDataset.ScnDataset.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.scnDataset.ScnDataset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.scnDataset.ScnDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.scnDataset.ScnDataset.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putPartitionSpec"></a>

```java
public void putPartitionSpec(ScnDatasetPartitionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema"></a>

```java
public void putSchema(ScnDatasetSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ScnDatasetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDataset.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetPartitionSpec"></a>

```java
public void resetPartitionSpec()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ScnDataset resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isConstruct"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDataset;

ScnDataset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDataset;

ScnDataset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDataset;

ScnDataset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataset.ScnDataset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDataset;

ScnDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ScnDataset.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ScnDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ScnDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ScnDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ScnDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference">ScnDatasetPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference">ScnDatasetSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList">ScnDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpecInput">partitionSpecInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpec"></a>

```java
public ScnDatasetPartitionSpecOutputReference getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference">ScnDatasetPartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.schema"></a>

```java
public ScnDatasetSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference">ScnDatasetSchemaOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.tags"></a>

```java
public ScnDatasetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList">ScnDatasetTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.partitionSpecInput"></a>

```java
public IResolvable|ScnDatasetPartitionSpec getPartitionSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.schemaInput"></a>

```java
public IResolvable|ScnDatasetSchema getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ScnDatasetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDataset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.scnDataset.ScnDataset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ScnDatasetConfig <a name="ScnDatasetConfig" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetConfig;

ScnDatasetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .namespace(java.lang.String)
//  .description(java.lang.String)
//  .partitionSpec(ScnDatasetPartitionSpec)
//  .schema(ScnDatasetSchema)
//  .tags(IResolvable|java.util.List<ScnDatasetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | The partition specification of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | The schema of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>></code> | The tags for the dataset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#instance_id ScnDataset#instance_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#namespace ScnDataset#namespace}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#description ScnDataset#description}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.partitionSpec"></a>

```java
public ScnDatasetPartitionSpec getPartitionSpec();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

The partition specification of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#partition_spec ScnDataset#partition_spec}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.schema"></a>

```java
public ScnDatasetSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

The schema of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#schema ScnDataset#schema}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataset.ScnDatasetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ScnDatasetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>>

The tags for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#tags ScnDataset#tags}

---

### ScnDatasetPartitionSpec <a name="ScnDatasetPartitionSpec" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpec;

ScnDatasetPartitionSpec.builder()
//  .fields(IResolvable|java.util.List<ScnDatasetPartitionSpecFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>></code> | The partition fields. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec.property.fields"></a>

```java
public IResolvable|java.util.List<ScnDatasetPartitionSpecFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>>

The partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#fields ScnDataset#fields}

---

### ScnDatasetPartitionSpecFields <a name="ScnDatasetPartitionSpecFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpecFields;

ScnDatasetPartitionSpecFields.builder()
//  .name(java.lang.String)
//  .transform(ScnDatasetPartitionSpecFieldsTransform)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.name">name</a></code> | <code>java.lang.String</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.transform">transform</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a></code> | The transformation of the partition field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `transform`<sup>Optional</sup> <a name="transform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields.property.transform"></a>

```java
public ScnDatasetPartitionSpecFieldsTransform getTransform();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

The transformation of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#transform ScnDataset#transform}

---

### ScnDatasetPartitionSpecFieldsTransform <a name="ScnDatasetPartitionSpecFieldsTransform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpecFieldsTransform;

ScnDatasetPartitionSpecFieldsTransform.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform.property.type">type</a></code> | <code>java.lang.String</code> | The type of partitioning transformation. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of partitioning transformation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#type ScnDataset#type}

---

### ScnDatasetSchema <a name="ScnDatasetSchema" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchema;

ScnDatasetSchema.builder()
//  .fields(IResolvable|java.util.List<ScnDatasetSchemaFields>)
//  .name(java.lang.String)
//  .primaryKeys(IResolvable|java.util.List<ScnDatasetSchemaPrimaryKeys>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>></code> | The list of field details of the dataset schema. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.name">name</a></code> | <code>java.lang.String</code> | The name of the dataset schema. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.primaryKeys">primaryKeys</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>></code> | The list of primary key fields for the dataset. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.fields"></a>

```java
public IResolvable|java.util.List<ScnDatasetSchemaFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>>

The list of field details of the dataset schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#fields ScnDataset#fields}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the dataset schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `primaryKeys`<sup>Optional</sup> <a name="primaryKeys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchema.property.primaryKeys"></a>

```java
public IResolvable|java.util.List<ScnDatasetSchemaPrimaryKeys> getPrimaryKeys();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>>

The list of primary key fields for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#primary_keys ScnDataset#primary_keys}

---

### ScnDatasetSchemaFields <a name="ScnDatasetSchemaFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaFields;

ScnDatasetSchemaFields.builder()
//  .isRequired(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicate if the field is required or not. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.name">name</a></code> | <code>java.lang.String</code> | The dataset field name. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.type">type</a></code> | <code>java.lang.String</code> | The dataset field type. |

---

##### `isRequired`<sup>Optional</sup> <a name="isRequired" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicate if the field is required or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#is_required ScnDataset#is_required}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The dataset field name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#name ScnDataset#name}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The dataset field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#type ScnDataset#type}

---

### ScnDatasetSchemaPrimaryKeys <a name="ScnDatasetSchemaPrimaryKeys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaPrimaryKeys;

ScnDatasetSchemaPrimaryKeys.builder()
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys.property.name">name</a></code> | <code>java.lang.String</code> | The name of the primary key field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the primary key field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#name ScnDataset#name}

---

### ScnDatasetTags <a name="ScnDatasetTags" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetTags;

ScnDatasetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#key ScnDataset#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/scn_dataset#value ScnDataset#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ScnDatasetPartitionSpecFieldsList <a name="ScnDatasetPartitionSpecFieldsList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpecFieldsList;

new ScnDatasetPartitionSpecFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.get"></a>

```java
public ScnDatasetPartitionSpecFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDatasetPartitionSpecFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>>

---


### ScnDatasetPartitionSpecFieldsOutputReference <a name="ScnDatasetPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpecFieldsOutputReference;

new ScnDatasetPartitionSpecFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.putTransform">putTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetTransform">resetTransform</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTransform` <a name="putTransform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.putTransform"></a>

```java
public void putTransform(ScnDatasetPartitionSpecFieldsTransform value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.putTransform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetTransform` <a name="resetTransform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.resetTransform"></a>

```java
public void resetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference">ScnDatasetPartitionSpecFieldsTransformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transform"></a>

```java
public ScnDatasetPartitionSpecFieldsTransformOutputReference getTransform();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference">ScnDatasetPartitionSpecFieldsTransformOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.transformInput"></a>

```java
public IResolvable|ScnDatasetPartitionSpecFieldsTransform getTransformInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetPartitionSpecFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>

---


### ScnDatasetPartitionSpecFieldsTransformOutputReference <a name="ScnDatasetPartitionSpecFieldsTransformOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpecFieldsTransformOutputReference;

new ScnDatasetPartitionSpecFieldsTransformOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransformOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetPartitionSpecFieldsTransform getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsTransform">ScnDatasetPartitionSpecFieldsTransform</a>

---


### ScnDatasetPartitionSpecOutputReference <a name="ScnDatasetPartitionSpecOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetPartitionSpecOutputReference;

new ScnDatasetPartitionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<ScnDatasetPartitionSpecFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.resetFields"></a>

```java
public void resetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList">ScnDatasetPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fields"></a>

```java
public ScnDatasetPartitionSpecFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFieldsList">ScnDatasetPartitionSpecFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<ScnDatasetPartitionSpecFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecFields">ScnDatasetPartitionSpecFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpecOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetPartitionSpec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetPartitionSpec">ScnDatasetPartitionSpec</a>

---


### ScnDatasetSchemaFieldsList <a name="ScnDatasetSchemaFieldsList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaFieldsList;

new ScnDatasetSchemaFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.get"></a>

```java
public ScnDatasetSchemaFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDatasetSchemaFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>>

---


### ScnDatasetSchemaFieldsOutputReference <a name="ScnDatasetSchemaFieldsOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaFieldsOutputReference;

new ScnDatasetSchemaFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetIsRequired">resetIsRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsRequired` <a name="resetIsRequired" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetIsRequired"></a>

```java
public void resetIsRequired()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequiredInput">isRequiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequired">isRequired</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isRequiredInput`<sup>Optional</sup> <a name="isRequiredInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequiredInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `isRequired`<sup>Required</sup> <a name="isRequired" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.isRequired"></a>

```java
public java.lang.Boolean|IResolvable getIsRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetSchemaFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>

---


### ScnDatasetSchemaOutputReference <a name="ScnDatasetSchemaOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaOutputReference;

new ScnDatasetSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putPrimaryKeys">putPrimaryKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetPrimaryKeys">resetPrimaryKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<ScnDatasetSchemaFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>>

---

##### `putPrimaryKeys` <a name="putPrimaryKeys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putPrimaryKeys"></a>

```java
public void putPrimaryKeys(IResolvable|java.util.List<ScnDatasetSchemaPrimaryKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.putPrimaryKeys.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPrimaryKeys` <a name="resetPrimaryKeys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.resetPrimaryKeys"></a>

```java
public void resetPrimaryKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList">ScnDatasetSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeys">primaryKeys</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList">ScnDatasetSchemaPrimaryKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeysInput">primaryKeysInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fields"></a>

```java
public ScnDatasetSchemaFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFieldsList">ScnDatasetSchemaFieldsList</a>

---

##### `primaryKeys`<sup>Required</sup> <a name="primaryKeys" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeys"></a>

```java
public ScnDatasetSchemaPrimaryKeysList getPrimaryKeys();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList">ScnDatasetSchemaPrimaryKeysList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<ScnDatasetSchemaFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaFields">ScnDatasetSchemaFields</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryKeysInput`<sup>Optional</sup> <a name="primaryKeysInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.primaryKeysInput"></a>

```java
public IResolvable|java.util.List<ScnDatasetSchemaPrimaryKeys> getPrimaryKeysInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchema">ScnDatasetSchema</a>

---


### ScnDatasetSchemaPrimaryKeysList <a name="ScnDatasetSchemaPrimaryKeysList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaPrimaryKeysList;

new ScnDatasetSchemaPrimaryKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.get"></a>

```java
public ScnDatasetSchemaPrimaryKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDatasetSchemaPrimaryKeys> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>>

---


### ScnDatasetSchemaPrimaryKeysOutputReference <a name="ScnDatasetSchemaPrimaryKeysOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetSchemaPrimaryKeysOutputReference;

new ScnDatasetSchemaPrimaryKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeysOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetSchemaPrimaryKeys getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetSchemaPrimaryKeys">ScnDatasetSchemaPrimaryKeys</a>

---


### ScnDatasetTagsList <a name="ScnDatasetTagsList" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetTagsList;

new ScnDatasetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.get"></a>

```java
public ScnDatasetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDatasetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>>

---


### ScnDatasetTagsOutputReference <a name="ScnDatasetTagsOutputReference" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_dataset.ScnDatasetTagsOutputReference;

new ScnDatasetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataset.ScnDatasetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDatasetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataset.ScnDatasetTags">ScnDatasetTags</a>

---



