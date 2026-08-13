# `cassandraTable` Submodule <a name="`cassandraTable` Submodule" id="@cdktn/provider-awscc.cassandraTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CassandraTable <a name="CassandraTable" id="@cdktn/provider-awscc.cassandraTable.CassandraTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table awscc_cassandra_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTable(Construct Scope, string Id, CassandraTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig">CassandraTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig">CassandraTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications">PutAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode">PutBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification">PutCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns">PutClusteringKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification">PutEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns">PutPartitionKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns">PutRegularColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications">PutReplicaSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput">PutWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetAutoScalingSpecifications">ResetAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetBillingMode">ResetBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetCdcSpecification">ResetCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClientSideTimestampsEnabled">ResetClientSideTimestampsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClusteringKeyColumns">ResetClusteringKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetDefaultTimeToLive">ResetDefaultTimeToLive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetEncryptionSpecification">ResetEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetPointInTimeRecoveryEnabled">ResetPointInTimeRecoveryEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetRegularColumns">ResetRegularColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetReplicaSpecifications">ResetReplicaSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.resetWarmThroughput">ResetWarmThroughput</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAutoScalingSpecifications` <a name="PutAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications"></a>

```csharp
private void PutAutoScalingSpecifications(CassandraTableAutoScalingSpecifications Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putAutoScalingSpecifications.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---

##### `PutBillingMode` <a name="PutBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode"></a>

```csharp
private void PutBillingMode(CassandraTableBillingMode Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putBillingMode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---

##### `PutCdcSpecification` <a name="PutCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification"></a>

```csharp
private void PutCdcSpecification(CassandraTableCdcSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putCdcSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---

##### `PutClusteringKeyColumns` <a name="PutClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns"></a>

```csharp
private void PutClusteringKeyColumns(IResolvable|CassandraTableClusteringKeyColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putClusteringKeyColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

---

##### `PutEncryptionSpecification` <a name="PutEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification"></a>

```csharp
private void PutEncryptionSpecification(CassandraTableEncryptionSpecification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putEncryptionSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---

##### `PutPartitionKeyColumns` <a name="PutPartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns"></a>

```csharp
private void PutPartitionKeyColumns(IResolvable|CassandraTablePartitionKeyColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putPartitionKeyColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

---

##### `PutRegularColumns` <a name="PutRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns"></a>

```csharp
private void PutRegularColumns(IResolvable|CassandraTableRegularColumns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putRegularColumns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

---

##### `PutReplicaSpecifications` <a name="PutReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications"></a>

```csharp
private void PutReplicaSpecifications(IResolvable|CassandraTableReplicaSpecifications[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putReplicaSpecifications.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags"></a>

```csharp
private void PutTags(IResolvable|CassandraTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

---

##### `PutWarmThroughput` <a name="PutWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput"></a>

```csharp
private void PutWarmThroughput(CassandraTableWarmThroughput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.putWarmThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---

##### `ResetAutoScalingSpecifications` <a name="ResetAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetAutoScalingSpecifications"></a>

```csharp
private void ResetAutoScalingSpecifications()
```

##### `ResetBillingMode` <a name="ResetBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetBillingMode"></a>

```csharp
private void ResetBillingMode()
```

##### `ResetCdcSpecification` <a name="ResetCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetCdcSpecification"></a>

```csharp
private void ResetCdcSpecification()
```

##### `ResetClientSideTimestampsEnabled` <a name="ResetClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClientSideTimestampsEnabled"></a>

```csharp
private void ResetClientSideTimestampsEnabled()
```

##### `ResetClusteringKeyColumns` <a name="ResetClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetClusteringKeyColumns"></a>

```csharp
private void ResetClusteringKeyColumns()
```

##### `ResetDefaultTimeToLive` <a name="ResetDefaultTimeToLive" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetDefaultTimeToLive"></a>

```csharp
private void ResetDefaultTimeToLive()
```

##### `ResetEncryptionSpecification` <a name="ResetEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetEncryptionSpecification"></a>

```csharp
private void ResetEncryptionSpecification()
```

##### `ResetPointInTimeRecoveryEnabled` <a name="ResetPointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetPointInTimeRecoveryEnabled"></a>

```csharp
private void ResetPointInTimeRecoveryEnabled()
```

##### `ResetRegularColumns` <a name="ResetRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetRegularColumns"></a>

```csharp
private void ResetRegularColumns()
```

##### `ResetReplicaSpecifications` <a name="ResetReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetReplicaSpecifications"></a>

```csharp
private void ResetReplicaSpecifications()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWarmThroughput` <a name="ResetWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.resetWarmThroughput"></a>

```csharp
private void ResetWarmThroughput()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CassandraTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CassandraTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CassandraTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CassandraTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CassandraTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecifications">AutoScalingSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference">CassandraTableAutoScalingSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingMode">BillingMode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference">CassandraTableBillingModeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecification">CdcSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference">CassandraTableCdcSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumns">ClusteringKeyColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList">CassandraTableClusteringKeyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecification">EncryptionSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference">CassandraTableEncryptionSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumns">PartitionKeyColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList">CassandraTablePartitionKeyColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumns">RegularColumns</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList">CassandraTableRegularColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecifications">ReplicaSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList">CassandraTableReplicaSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList">CassandraTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference">CassandraTableWarmThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecificationsInput">AutoScalingSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingModeInput">BillingModeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecificationInput">CdcSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabledInput">ClientSideTimestampsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumnsInput">ClusteringKeyColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLiveInput">DefaultTimeToLiveInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecificationInput">EncryptionSpecificationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceNameInput">KeyspaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumnsInput">PartitionKeyColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabledInput">PointInTimeRecoveryEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumnsInput">RegularColumnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecificationsInput">ReplicaSpecificationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughputInput">WarmThroughputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabled">ClientSideTimestampsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLive">DefaultTimeToLive</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceName">KeyspaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoScalingSpecifications`<sup>Required</sup> <a name="AutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecifications"></a>

```csharp
public CassandraTableAutoScalingSpecificationsOutputReference AutoScalingSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference">CassandraTableAutoScalingSpecificationsOutputReference</a>

---

##### `BillingMode`<sup>Required</sup> <a name="BillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingMode"></a>

```csharp
public CassandraTableBillingModeOutputReference BillingMode { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference">CassandraTableBillingModeOutputReference</a>

---

##### `CdcSpecification`<sup>Required</sup> <a name="CdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecification"></a>

```csharp
public CassandraTableCdcSpecificationOutputReference CdcSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference">CassandraTableCdcSpecificationOutputReference</a>

---

##### `ClusteringKeyColumns`<sup>Required</sup> <a name="ClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumns"></a>

```csharp
public CassandraTableClusteringKeyColumnsList ClusteringKeyColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList">CassandraTableClusteringKeyColumnsList</a>

---

##### `EncryptionSpecification`<sup>Required</sup> <a name="EncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecification"></a>

```csharp
public CassandraTableEncryptionSpecificationOutputReference EncryptionSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference">CassandraTableEncryptionSpecificationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PartitionKeyColumns`<sup>Required</sup> <a name="PartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumns"></a>

```csharp
public CassandraTablePartitionKeyColumnsList PartitionKeyColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList">CassandraTablePartitionKeyColumnsList</a>

---

##### `RegularColumns`<sup>Required</sup> <a name="RegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumns"></a>

```csharp
public CassandraTableRegularColumnsList RegularColumns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList">CassandraTableRegularColumnsList</a>

---

##### `ReplicaSpecifications`<sup>Required</sup> <a name="ReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecifications"></a>

```csharp
public CassandraTableReplicaSpecificationsList ReplicaSpecifications { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList">CassandraTableReplicaSpecificationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tags"></a>

```csharp
public CassandraTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList">CassandraTableTagsList</a>

---

##### `WarmThroughput`<sup>Required</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughput"></a>

```csharp
public CassandraTableWarmThroughputOutputReference WarmThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference">CassandraTableWarmThroughputOutputReference</a>

---

##### `AutoScalingSpecificationsInput`<sup>Optional</sup> <a name="AutoScalingSpecificationsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.autoScalingSpecificationsInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecifications AutoScalingSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---

##### `BillingModeInput`<sup>Optional</sup> <a name="BillingModeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.billingModeInput"></a>

```csharp
public IResolvable|CassandraTableBillingMode BillingModeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---

##### `CdcSpecificationInput`<sup>Optional</sup> <a name="CdcSpecificationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.cdcSpecificationInput"></a>

```csharp
public IResolvable|CassandraTableCdcSpecification CdcSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---

##### `ClientSideTimestampsEnabledInput`<sup>Optional</sup> <a name="ClientSideTimestampsEnabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabledInput"></a>

```csharp
public bool|IResolvable ClientSideTimestampsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClusteringKeyColumnsInput`<sup>Optional</sup> <a name="ClusteringKeyColumnsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clusteringKeyColumnsInput"></a>

```csharp
public IResolvable|CassandraTableClusteringKeyColumns[] ClusteringKeyColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

---

##### `DefaultTimeToLiveInput`<sup>Optional</sup> <a name="DefaultTimeToLiveInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLiveInput"></a>

```csharp
public double DefaultTimeToLiveInput { get; }
```

- *Type:* double

---

##### `EncryptionSpecificationInput`<sup>Optional</sup> <a name="EncryptionSpecificationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.encryptionSpecificationInput"></a>

```csharp
public IResolvable|CassandraTableEncryptionSpecification EncryptionSpecificationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---

##### `KeyspaceNameInput`<sup>Optional</sup> <a name="KeyspaceNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceNameInput"></a>

```csharp
public string KeyspaceNameInput { get; }
```

- *Type:* string

---

##### `PartitionKeyColumnsInput`<sup>Optional</sup> <a name="PartitionKeyColumnsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.partitionKeyColumnsInput"></a>

```csharp
public IResolvable|CassandraTablePartitionKeyColumns[] PartitionKeyColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

---

##### `PointInTimeRecoveryEnabledInput`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabledInput"></a>

```csharp
public bool|IResolvable PointInTimeRecoveryEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RegularColumnsInput`<sup>Optional</sup> <a name="RegularColumnsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.regularColumnsInput"></a>

```csharp
public IResolvable|CassandraTableRegularColumns[] RegularColumnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

---

##### `ReplicaSpecificationsInput`<sup>Optional</sup> <a name="ReplicaSpecificationsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.replicaSpecificationsInput"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecifications[] ReplicaSpecificationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tagsInput"></a>

```csharp
public IResolvable|CassandraTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

---

##### `WarmThroughputInput`<sup>Optional</sup> <a name="WarmThroughputInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.warmThroughputInput"></a>

```csharp
public IResolvable|CassandraTableWarmThroughput WarmThroughputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---

##### `ClientSideTimestampsEnabled`<sup>Required</sup> <a name="ClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.clientSideTimestampsEnabled"></a>

```csharp
public bool|IResolvable ClientSideTimestampsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DefaultTimeToLive`<sup>Required</sup> <a name="DefaultTimeToLive" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.defaultTimeToLive"></a>

```csharp
public double DefaultTimeToLive { get; }
```

- *Type:* double

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.keyspaceName"></a>

```csharp
public string KeyspaceName { get; }
```

- *Type:* string

---

##### `PointInTimeRecoveryEnabled`<sup>Required</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.pointInTimeRecoveryEnabled"></a>

```csharp
public bool|IResolvable PointInTimeRecoveryEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cassandraTable.CassandraTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CassandraTableAutoScalingSpecifications <a name="CassandraTableAutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecifications {
    CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling ReadCapacityAutoScaling = null,
    CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling WriteCapacityAutoScaling = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.readCapacityAutoScaling">ReadCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.writeCapacityAutoScaling">WriteCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |

---

##### `ReadCapacityAutoScaling`<sup>Optional</sup> <a name="ReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.readCapacityAutoScaling"></a>

```csharp
public CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling ReadCapacityAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

##### `WriteCapacityAutoScaling`<sup>Optional</sup> <a name="WriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications.property.writeCapacityAutoScaling"></a>

```csharp
public CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling WriteCapacityAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#write_capacity_auto_scaling CassandraTable#write_capacity_auto_scaling}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling {
    bool|IResolvable AutoScalingDisabled = null,
    double MaximumUnits = null,
    double MinimumUnits = null,
    CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy ScalingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled">AutoScalingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.maximumUnits">MaximumUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.minimumUnits">MinimumUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `AutoScalingDisabled`<sup>Optional</sup> <a name="AutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled"></a>

```csharp
public bool|IResolvable AutoScalingDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `MaximumUnits`<sup>Optional</sup> <a name="MaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.maximumUnits"></a>

```csharp
public double MaximumUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `MinimumUnits`<sup>Optional</sup> <a name="MinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.minimumUnits"></a>

```csharp
public double MinimumUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling.property.scalingPolicy"></a>

```csharp
public CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy ScalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy {
    CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```csharp
public CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
    bool|IResolvable DisableScaleIn = null,
    double ScaleInCooldown = null,
    double ScaleOutCooldown = null,
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">DisableScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">TargetValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `DisableScaleIn`<sup>Optional</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```csharp
public bool|IResolvable DisableScaleIn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `ScaleInCooldown`<sup>Optional</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `ScaleOutCooldown`<sup>Optional</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling {
    bool|IResolvable AutoScalingDisabled = null,
    double MaximumUnits = null,
    double MinimumUnits = null,
    CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy ScalingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.autoScalingDisabled">AutoScalingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.maximumUnits">MaximumUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.minimumUnits">MinimumUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `AutoScalingDisabled`<sup>Optional</sup> <a name="AutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.autoScalingDisabled"></a>

```csharp
public bool|IResolvable AutoScalingDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `MaximumUnits`<sup>Optional</sup> <a name="MaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.maximumUnits"></a>

```csharp
public double MaximumUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `MinimumUnits`<sup>Optional</sup> <a name="MinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.minimumUnits"></a>

```csharp
public double MinimumUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling.property.scalingPolicy"></a>

```csharp
public CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy ScalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy {
    CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```csharp
public CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
    bool|IResolvable DisableScaleIn = null,
    double ScaleInCooldown = null,
    double ScaleOutCooldown = null,
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">DisableScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">TargetValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `DisableScaleIn`<sup>Optional</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```csharp
public bool|IResolvable DisableScaleIn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `ScaleInCooldown`<sup>Optional</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `ScaleOutCooldown`<sup>Optional</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableBillingMode <a name="CassandraTableBillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableBillingMode {
    string Mode = null,
    CassandraTableBillingModeProvisionedThroughput ProvisionedThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.mode">Mode</a></code> | <code>string</code> | Capacity mode for the specified table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Capacity mode for the specified table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#mode CassandraTable#mode}

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode.property.provisionedThroughput"></a>

```csharp
public CassandraTableBillingModeProvisionedThroughput ProvisionedThroughput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

Throughput for the specified table, which consists of values for ReadCapacityUnits and WriteCapacityUnits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#provisioned_throughput CassandraTable#provisioned_throughput}

---

### CassandraTableBillingModeProvisionedThroughput <a name="CassandraTableBillingModeProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableBillingModeProvisionedThroughput {
    double ReadCapacityUnits = null,
    double WriteCapacityUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}. |

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

##### `WriteCapacityUnits`<sup>Optional</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput.property.writeCapacityUnits"></a>

```csharp
public double WriteCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#write_capacity_units CassandraTable#write_capacity_units}.

---

### CassandraTableCdcSpecification <a name="CassandraTableCdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableCdcSpecification {
    string Status = null,
    IResolvable|CassandraTableCdcSpecificationTags[] Tags = null,
    string ViewType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.status">Status</a></code> | <code>string</code> | Indicates whether CDC is enabled or disabled for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]</code> | An array of key-value pairs to apply to the CDC stream resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.viewType">ViewType</a></code> | <code>string</code> | Specifies what data should be captured in the change data stream. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Indicates whether CDC is enabled or disabled for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#status CassandraTable#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.tags"></a>

```csharp
public IResolvable|CassandraTableCdcSpecificationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

An array of key-value pairs to apply to the CDC stream resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `ViewType`<sup>Optional</sup> <a name="ViewType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification.property.viewType"></a>

```csharp
public string ViewType { get; set; }
```

- *Type:* string

Specifies what data should be captured in the change data stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#view_type CassandraTable#view_type}

---

### CassandraTableCdcSpecificationTags <a name="CassandraTableCdcSpecificationTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableCdcSpecificationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#key CassandraTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#value CassandraTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#key CassandraTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#value CassandraTable#value}.

---

### CassandraTableClusteringKeyColumns <a name="CassandraTableClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableClusteringKeyColumns {
    CassandraTableClusteringKeyColumnsColumn Column = null,
    string OrderBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.column">Column</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column CassandraTable#column}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.orderBy">OrderBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.column"></a>

```csharp
public CassandraTableClusteringKeyColumnsColumn Column { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column CassandraTable#column}.

---

##### `OrderBy`<sup>Optional</sup> <a name="OrderBy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns.property.orderBy"></a>

```csharp
public string OrderBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#order_by CassandraTable#order_by}.

---

### CassandraTableClusteringKeyColumnsColumn <a name="CassandraTableClusteringKeyColumnsColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableClusteringKeyColumnsColumn {
    string ColumnName = null,
    string ColumnType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnType">ColumnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn.property.columnType"></a>

```csharp
public string ColumnType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableConfig <a name="CassandraTableConfig" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KeyspaceName,
    IResolvable|CassandraTablePartitionKeyColumns[] PartitionKeyColumns,
    CassandraTableAutoScalingSpecifications AutoScalingSpecifications = null,
    CassandraTableBillingMode BillingMode = null,
    CassandraTableCdcSpecification CdcSpecification = null,
    bool|IResolvable ClientSideTimestampsEnabled = null,
    IResolvable|CassandraTableClusteringKeyColumns[] ClusteringKeyColumns = null,
    double DefaultTimeToLive = null,
    CassandraTableEncryptionSpecification EncryptionSpecification = null,
    bool|IResolvable PointInTimeRecoveryEnabled = null,
    IResolvable|CassandraTableRegularColumns[] RegularColumns = null,
    IResolvable|CassandraTableReplicaSpecifications[] ReplicaSpecifications = null,
    string TableName = null,
    IResolvable|CassandraTableTags[] Tags = null,
    CassandraTableWarmThroughput WarmThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.keyspaceName">KeyspaceName</a></code> | <code>string</code> | Name for Cassandra keyspace. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.partitionKeyColumns">PartitionKeyColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]</code> | Partition key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.autoScalingSpecifications">AutoScalingSpecifications</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | Represents the read and write settings used for AutoScaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.billingMode">BillingMode</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.cdcSpecification">CdcSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | Represents the CDC configuration for the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clientSideTimestampsEnabled">ClientSideTimestampsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clusteringKeyColumns">ClusteringKeyColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]</code> | Clustering key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.defaultTimeToLive">DefaultTimeToLive</a></code> | <code>double</code> | Default TTL (Time To Live) in seconds, where zero is disabled. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.encryptionSpecification">EncryptionSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | Represents the settings used to enable server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.pointInTimeRecoveryEnabled">PointInTimeRecoveryEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether point in time recovery is enabled (true) or disabled (false) on the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.regularColumns">RegularColumns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]</code> | Non-key columns of the table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.replicaSpecifications">ReplicaSpecifications</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tableName">TableName</a></code> | <code>string</code> | Name for Cassandra table. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.warmThroughput">WarmThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | Warm throughput configuration for the table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KeyspaceName`<sup>Required</sup> <a name="KeyspaceName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.keyspaceName"></a>

```csharp
public string KeyspaceName { get; set; }
```

- *Type:* string

Name for Cassandra keyspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#keyspace_name CassandraTable#keyspace_name}

---

##### `PartitionKeyColumns`<sup>Required</sup> <a name="PartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.partitionKeyColumns"></a>

```csharp
public IResolvable|CassandraTablePartitionKeyColumns[] PartitionKeyColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

Partition key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#partition_key_columns CassandraTable#partition_key_columns}

---

##### `AutoScalingSpecifications`<sup>Optional</sup> <a name="AutoScalingSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.autoScalingSpecifications"></a>

```csharp
public CassandraTableAutoScalingSpecifications AutoScalingSpecifications { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

Represents the read and write settings used for AutoScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_specifications CassandraTable#auto_scaling_specifications}

---

##### `BillingMode`<sup>Optional</sup> <a name="BillingMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.billingMode"></a>

```csharp
public CassandraTableBillingMode BillingMode { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#billing_mode CassandraTable#billing_mode}.

---

##### `CdcSpecification`<sup>Optional</sup> <a name="CdcSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.cdcSpecification"></a>

```csharp
public CassandraTableCdcSpecification CdcSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

Represents the CDC configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#cdc_specification CassandraTable#cdc_specification}

---

##### `ClientSideTimestampsEnabled`<sup>Optional</sup> <a name="ClientSideTimestampsEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clientSideTimestampsEnabled"></a>

```csharp
public bool|IResolvable ClientSideTimestampsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether client side timestamps are enabled (true) or disabled (false) on the table.

False by default, once it is enabled it cannot be disabled again.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#client_side_timestamps_enabled CassandraTable#client_side_timestamps_enabled}

---

##### `ClusteringKeyColumns`<sup>Optional</sup> <a name="ClusteringKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.clusteringKeyColumns"></a>

```csharp
public IResolvable|CassandraTableClusteringKeyColumns[] ClusteringKeyColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

Clustering key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#clustering_key_columns CassandraTable#clustering_key_columns}

---

##### `DefaultTimeToLive`<sup>Optional</sup> <a name="DefaultTimeToLive" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.defaultTimeToLive"></a>

```csharp
public double DefaultTimeToLive { get; set; }
```

- *Type:* double

Default TTL (Time To Live) in seconds, where zero is disabled.

If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#default_time_to_live CassandraTable#default_time_to_live}

---

##### `EncryptionSpecification`<sup>Optional</sup> <a name="EncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.encryptionSpecification"></a>

```csharp
public CassandraTableEncryptionSpecification EncryptionSpecification { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

Represents the settings used to enable server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#encryption_specification CassandraTable#encryption_specification}

---

##### `PointInTimeRecoveryEnabled`<sup>Optional</sup> <a name="PointInTimeRecoveryEnabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.pointInTimeRecoveryEnabled"></a>

```csharp
public bool|IResolvable PointInTimeRecoveryEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#point_in_time_recovery_enabled CassandraTable#point_in_time_recovery_enabled}

---

##### `RegularColumns`<sup>Optional</sup> <a name="RegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.regularColumns"></a>

```csharp
public IResolvable|CassandraTableRegularColumns[] RegularColumns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

Non-key columns of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#regular_columns CassandraTable#regular_columns}

---

##### `ReplicaSpecifications`<sup>Optional</sup> <a name="ReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.replicaSpecifications"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecifications[] ReplicaSpecifications { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#replica_specifications CassandraTable#replica_specifications}.

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Name for Cassandra table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#table_name CassandraTable#table_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.tags"></a>

```csharp
public IResolvable|CassandraTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#tags CassandraTable#tags}

---

##### `WarmThroughput`<sup>Optional</sup> <a name="WarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableConfig.property.warmThroughput"></a>

```csharp
public CassandraTableWarmThroughput WarmThroughput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

Warm throughput configuration for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#warm_throughput CassandraTable#warm_throughput}

---

### CassandraTableEncryptionSpecification <a name="CassandraTableEncryptionSpecification" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableEncryptionSpecification {
    string EncryptionType = null,
    string KmsKeyIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Server-side encryption type. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Server-side encryption type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#encryption_type CassandraTable#encryption_type}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; set; }
```

- *Type:* string

The AWS KMS customer master key (CMK) that should be used for the AWS KMS encryption.

To specify a CMK, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#kms_key_identifier CassandraTable#kms_key_identifier}

---

### CassandraTablePartitionKeyColumns <a name="CassandraTablePartitionKeyColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTablePartitionKeyColumns {
    string ColumnName,
    string ColumnType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnType">ColumnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns.property.columnType"></a>

```csharp
public string ColumnType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableRegularColumns <a name="CassandraTableRegularColumns" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableRegularColumns {
    string ColumnName = null,
    string ColumnType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnName">ColumnName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnType">ColumnType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnName"></a>

```csharp
public string ColumnName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_name CassandraTable#column_name}.

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns.property.columnType"></a>

```csharp
public string ColumnType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#column_type CassandraTable#column_type}.

---

### CassandraTableReplicaSpecifications <a name="CassandraTableReplicaSpecifications" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecifications {
    CassandraTableReplicaSpecificationsReadCapacityAutoScaling ReadCapacityAutoScaling = null,
    double ReadCapacityUnits = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityAutoScaling">ReadCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | Represents configuration for auto scaling. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#region CassandraTable#region}. |

---

##### `ReadCapacityAutoScaling`<sup>Optional</sup> <a name="ReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityAutoScaling"></a>

```csharp
public CassandraTableReplicaSpecificationsReadCapacityAutoScaling ReadCapacityAutoScaling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

Represents configuration for auto scaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_capacity_auto_scaling CassandraTable#read_capacity_auto_scaling}

---

##### `ReadCapacityUnits`<sup>Optional</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_capacity_units CassandraTable#read_capacity_units}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#region CassandraTable#region}.

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScaling <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsReadCapacityAutoScaling {
    bool|IResolvable AutoScalingDisabled = null,
    double MaximumUnits = null,
    double MinimumUnits = null,
    CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy ScalingPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled">AutoScalingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.maximumUnits">MaximumUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.minimumUnits">MinimumUnits</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | Represents scaling policy. |

---

##### `AutoScalingDisabled`<sup>Optional</sup> <a name="AutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.autoScalingDisabled"></a>

```csharp
public bool|IResolvable AutoScalingDisabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#auto_scaling_disabled CassandraTable#auto_scaling_disabled}.

---

##### `MaximumUnits`<sup>Optional</sup> <a name="MaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.maximumUnits"></a>

```csharp
public double MaximumUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#maximum_units CassandraTable#maximum_units}.

---

##### `MinimumUnits`<sup>Optional</sup> <a name="MinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.minimumUnits"></a>

```csharp
public double MinimumUnits { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#minimum_units CassandraTable#minimum_units}.

---

##### `ScalingPolicy`<sup>Optional</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling.property.scalingPolicy"></a>

```csharp
public CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy ScalingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

Represents scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scaling_policy CassandraTable#scaling_policy}

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy {
    CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | Represents configuration for target tracking scaling policy. |

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy.property.targetTrackingScalingPolicyConfiguration"></a>

```csharp
public CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

Represents configuration for target tracking scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_tracking_scaling_policy_configuration CassandraTable#target_tracking_scaling_policy_configuration}

---

### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration {
    bool|IResolvable DisableScaleIn = null,
    double ScaleInCooldown = null,
    double ScaleOutCooldown = null,
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn">DisableScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue">TargetValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}. |

---

##### `DisableScaleIn`<sup>Optional</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.disableScaleIn"></a>

```csharp
public bool|IResolvable DisableScaleIn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#disable_scale_in CassandraTable#disable_scale_in}.

---

##### `ScaleInCooldown`<sup>Optional</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_in_cooldown CassandraTable#scale_in_cooldown}.

---

##### `ScaleOutCooldown`<sup>Optional</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#scale_out_cooldown CassandraTable#scale_out_cooldown}.

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#target_value CassandraTable#target_value}.

---

### CassandraTableTags <a name="CassandraTableTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#key CassandraTable#key}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#value CassandraTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#key CassandraTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#value CassandraTable#value}.

---

### CassandraTableWarmThroughput <a name="CassandraTableWarmThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableWarmThroughput {
    double ReadUnitsPerSecond = null,
    double WriteUnitsPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}. |

---

##### `ReadUnitsPerSecond`<sup>Optional</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.readUnitsPerSecond"></a>

```csharp
public double ReadUnitsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#read_units_per_second CassandraTable#read_units_per_second}.

---

##### `WriteUnitsPerSecond`<sup>Optional</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput.property.writeUnitsPerSecond"></a>

```csharp
public double WriteUnitsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cassandra_table#write_units_per_second CassandraTable#write_units_per_second}.

---

## Classes <a name="Classes" id="Classes"></a>

### CassandraTableAutoScalingSpecificationsOutputReference <a name="CassandraTableAutoScalingSpecificationsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling">PutReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling">PutWriteCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetReadCapacityAutoScaling">ResetReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetWriteCapacityAutoScaling">ResetWriteCapacityAutoScaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadCapacityAutoScaling` <a name="PutReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling"></a>

```csharp
private void PutReadCapacityAutoScaling(CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---

##### `PutWriteCapacityAutoScaling` <a name="PutWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling"></a>

```csharp
private void PutWriteCapacityAutoScaling(CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.putWriteCapacityAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---

##### `ResetReadCapacityAutoScaling` <a name="ResetReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetReadCapacityAutoScaling"></a>

```csharp
private void ResetReadCapacityAutoScaling()
```

##### `ResetWriteCapacityAutoScaling` <a name="ResetWriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.resetWriteCapacityAutoScaling"></a>

```csharp
private void ResetWriteCapacityAutoScaling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScaling">ReadCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScaling">WriteCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScalingInput">ReadCapacityAutoScalingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScalingInput">WriteCapacityAutoScalingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadCapacityAutoScaling`<sup>Required</sup> <a name="ReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScaling"></a>

```csharp
public CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference ReadCapacityAutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference</a>

---

##### `WriteCapacityAutoScaling`<sup>Required</sup> <a name="WriteCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScaling"></a>

```csharp
public CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference WriteCapacityAutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference</a>

---

##### `ReadCapacityAutoScalingInput`<sup>Optional</sup> <a name="ReadCapacityAutoScalingInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.readCapacityAutoScalingInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling ReadCapacityAutoScalingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---

##### `WriteCapacityAutoScalingInput`<sup>Optional</sup> <a name="WriteCapacityAutoScalingInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.writeCapacityAutoScalingInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling WriteCapacityAutoScalingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecifications">CassandraTableAutoScalingSpecifications</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy">PutScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled">ResetAutoScalingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits">ResetMaximumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits">ResetMinimumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy">ResetScalingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScalingPolicy` <a name="PutScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```csharp
private void PutScalingPolicy(CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `ResetAutoScalingDisabled` <a name="ResetAutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```csharp
private void ResetAutoScalingDisabled()
```

##### `ResetMaximumUnits` <a name="ResetMaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```csharp
private void ResetMaximumUnits()
```

##### `ResetMinimumUnits` <a name="ResetMinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```csharp
private void ResetMinimumUnits()
```

##### `ResetScalingPolicy` <a name="ResetScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```csharp
private void ResetScalingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">AutoScalingDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput">MaximumUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput">MinimumUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput">ScalingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled">AutoScalingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits">MaximumUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits">MinimumUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```csharp
public CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference ScalingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `AutoScalingDisabledInput`<sup>Optional</sup> <a name="AutoScalingDisabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```csharp
public bool|IResolvable AutoScalingDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumUnitsInput`<sup>Optional</sup> <a name="MaximumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```csharp
public double MaximumUnitsInput { get; }
```

- *Type:* double

---

##### `MinimumUnitsInput`<sup>Optional</sup> <a name="MinimumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```csharp
public double MinimumUnitsInput { get; }
```

- *Type:* double

---

##### `ScalingPolicyInput`<sup>Optional</sup> <a name="ScalingPolicyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy ScalingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `AutoScalingDisabled`<sup>Required</sup> <a name="AutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```csharp
public bool|IResolvable AutoScalingDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumUnits`<sup>Required</sup> <a name="MaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```csharp
public double MaximumUnits { get; }
```

- *Type:* double

---

##### `MinimumUnits`<sup>Required</sup> <a name="MinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```csharp
public double MinimumUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling">CassandraTableAutoScalingSpecificationsReadCapacityAutoScaling</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">PutTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">ResetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTrackingScalingPolicyConfiguration` <a name="PutTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```csharp
private void PutTargetTrackingScalingPolicyConfiguration(CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `ResetTargetTrackingScalingPolicyConfiguration` <a name="ResetTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```csharp
private void ResetTargetTrackingScalingPolicyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">TargetTrackingScalingPolicyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```csharp
public CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference TargetTrackingScalingPolicyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `TargetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfigurationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">ResetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">ResetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">ResetScaleOutCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableScaleIn` <a name="ResetDisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```csharp
private void ResetDisableScaleIn()
```

##### `ResetScaleInCooldown` <a name="ResetScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```csharp
private void ResetScaleInCooldown()
```

##### `ResetScaleOutCooldown` <a name="ResetScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```csharp
private void ResetScaleOutCooldown()
```

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">DisableScaleInInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">ScaleInCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">ScaleOutCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableScaleInInput`<sup>Optional</sup> <a name="DisableScaleInInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```csharp
public bool|IResolvable DisableScaleInInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScaleInCooldownInput`<sup>Optional</sup> <a name="ScaleInCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```csharp
public double ScaleInCooldownInput { get; }
```

- *Type:* double

---

##### `ScaleOutCooldownInput`<sup>Optional</sup> <a name="ScaleOutCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```csharp
public double ScaleOutCooldownInput { get; }
```

- *Type:* double

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```csharp
public bool|IResolvable DisableScaleIn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; }
```

- *Type:* double

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy">PutScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetAutoScalingDisabled">ResetAutoScalingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMaximumUnits">ResetMaximumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMinimumUnits">ResetMinimumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetScalingPolicy">ResetScalingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScalingPolicy` <a name="PutScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```csharp
private void PutScalingPolicy(CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---

##### `ResetAutoScalingDisabled` <a name="ResetAutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```csharp
private void ResetAutoScalingDisabled()
```

##### `ResetMaximumUnits` <a name="ResetMaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```csharp
private void ResetMaximumUnits()
```

##### `ResetMinimumUnits` <a name="ResetMinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```csharp
private void ResetMinimumUnits()
```

##### `ResetScalingPolicy` <a name="ResetScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```csharp
private void ResetScalingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">AutoScalingDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnitsInput">MaximumUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnitsInput">MinimumUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicyInput">ScalingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabled">AutoScalingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnits">MaximumUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnits">MinimumUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```csharp
public CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference ScalingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `AutoScalingDisabledInput`<sup>Optional</sup> <a name="AutoScalingDisabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```csharp
public bool|IResolvable AutoScalingDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumUnitsInput`<sup>Optional</sup> <a name="MaximumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```csharp
public double MaximumUnitsInput { get; }
```

- *Type:* double

---

##### `MinimumUnitsInput`<sup>Optional</sup> <a name="MinimumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```csharp
public double MinimumUnitsInput { get; }
```

- *Type:* double

---

##### `ScalingPolicyInput`<sup>Optional</sup> <a name="ScalingPolicyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy ScalingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---

##### `AutoScalingDisabled`<sup>Required</sup> <a name="AutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```csharp
public bool|IResolvable AutoScalingDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumUnits`<sup>Required</sup> <a name="MaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```csharp
public double MaximumUnits { get; }
```

- *Type:* double

---

##### `MinimumUnits`<sup>Required</sup> <a name="MinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```csharp
public double MinimumUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScaling</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">PutTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">ResetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTrackingScalingPolicyConfiguration` <a name="PutTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```csharp
private void PutTargetTrackingScalingPolicyConfiguration(CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `ResetTargetTrackingScalingPolicyConfiguration` <a name="ResetTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```csharp
private void ResetTargetTrackingScalingPolicyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">TargetTrackingScalingPolicyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```csharp
public CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference TargetTrackingScalingPolicyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `TargetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfigurationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">ResetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">ResetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">ResetScaleOutCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableScaleIn` <a name="ResetDisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```csharp
private void ResetDisableScaleIn()
```

##### `ResetScaleInCooldown` <a name="ResetScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```csharp
private void ResetScaleInCooldown()
```

##### `ResetScaleOutCooldown` <a name="ResetScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```csharp
private void ResetScaleOutCooldown()
```

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">DisableScaleInInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">ScaleInCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">ScaleOutCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableScaleInInput`<sup>Optional</sup> <a name="DisableScaleInInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```csharp
public bool|IResolvable DisableScaleInInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScaleInCooldownInput`<sup>Optional</sup> <a name="ScaleInCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```csharp
public double ScaleInCooldownInput { get; }
```

- *Type:* double

---

##### `ScaleOutCooldownInput`<sup>Optional</sup> <a name="ScaleOutCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```csharp
public double ScaleOutCooldownInput { get; }
```

- *Type:* double

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```csharp
public bool|IResolvable DisableScaleIn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; }
```

- *Type:* double

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableAutoScalingSpecificationsWriteCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableBillingModeOutputReference <a name="CassandraTableBillingModeOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableBillingModeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput"></a>

```csharp
private void PutProvisionedThroughput(CassandraTableBillingModeProvisionedThroughput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference">CassandraTableBillingModeProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughput"></a>

```csharp
public CassandraTableBillingModeProvisionedThroughputOutputReference ProvisionedThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference">CassandraTableBillingModeProvisionedThroughputOutputReference</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.provisionedThroughputInput"></a>

```csharp
public IResolvable|CassandraTableBillingModeProvisionedThroughput ProvisionedThroughputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableBillingMode InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingMode">CassandraTableBillingMode</a>

---


### CassandraTableBillingModeProvisionedThroughputOutputReference <a name="CassandraTableBillingModeProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableBillingModeProvisionedThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetWriteCapacityUnits">ResetWriteCapacityUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetReadCapacityUnits"></a>

```csharp
private void ResetReadCapacityUnits()
```

##### `ResetWriteCapacityUnits` <a name="ResetWriteCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.resetWriteCapacityUnits"></a>

```csharp
private void ResetWriteCapacityUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnitsInput">WriteCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnits">WriteCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnitsInput"></a>

```csharp
public double ReadCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `WriteCapacityUnitsInput`<sup>Optional</sup> <a name="WriteCapacityUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnitsInput"></a>

```csharp
public double WriteCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; }
```

- *Type:* double

---

##### `WriteCapacityUnits`<sup>Required</sup> <a name="WriteCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.writeCapacityUnits"></a>

```csharp
public double WriteCapacityUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableBillingModeProvisionedThroughput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableBillingModeProvisionedThroughput">CassandraTableBillingModeProvisionedThroughput</a>

---


### CassandraTableCdcSpecificationOutputReference <a name="CassandraTableCdcSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableCdcSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetViewType">ResetViewType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|CassandraTableCdcSpecificationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

---

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetViewType` <a name="ResetViewType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.resetViewType"></a>

```csharp
private void ResetViewType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList">CassandraTableCdcSpecificationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewTypeInput">ViewTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewType">ViewType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tags"></a>

```csharp
public CassandraTableCdcSpecificationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList">CassandraTableCdcSpecificationTagsList</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|CassandraTableCdcSpecificationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

---

##### `ViewTypeInput`<sup>Optional</sup> <a name="ViewTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewTypeInput"></a>

```csharp
public string ViewTypeInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ViewType`<sup>Required</sup> <a name="ViewType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.viewType"></a>

```csharp
public string ViewType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableCdcSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecification">CassandraTableCdcSpecification</a>

---


### CassandraTableCdcSpecificationTagsList <a name="CassandraTableCdcSpecificationTagsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableCdcSpecificationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get"></a>

```csharp
private CassandraTableCdcSpecificationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableCdcSpecificationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>[]

---


### CassandraTableCdcSpecificationTagsOutputReference <a name="CassandraTableCdcSpecificationTagsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableCdcSpecificationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableCdcSpecificationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableCdcSpecificationTags">CassandraTableCdcSpecificationTags</a>

---


### CassandraTableClusteringKeyColumnsColumnOutputReference <a name="CassandraTableClusteringKeyColumnsColumnOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableClusteringKeyColumnsColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.resetColumnType"></a>

```csharp
private void ResetColumnType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnTypeInput"></a>

```csharp
public string ColumnTypeInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableClusteringKeyColumnsColumn InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---


### CassandraTableClusteringKeyColumnsList <a name="CassandraTableClusteringKeyColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableClusteringKeyColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get"></a>

```csharp
private CassandraTableClusteringKeyColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableClusteringKeyColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>[]

---


### CassandraTableClusteringKeyColumnsOutputReference <a name="CassandraTableClusteringKeyColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableClusteringKeyColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetOrderBy">ResetOrderBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn"></a>

```csharp
private void PutColumn(CassandraTableClusteringKeyColumnsColumn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetOrderBy` <a name="ResetOrderBy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.resetOrderBy"></a>

```csharp
private void ResetOrderBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.column">Column</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference">CassandraTableClusteringKeyColumnsColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.columnInput">ColumnInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderByInput">OrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderBy">OrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.column"></a>

```csharp
public CassandraTableClusteringKeyColumnsColumnOutputReference Column { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumnOutputReference">CassandraTableClusteringKeyColumnsColumnOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.columnInput"></a>

```csharp
public IResolvable|CassandraTableClusteringKeyColumnsColumn ColumnInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsColumn">CassandraTableClusteringKeyColumnsColumn</a>

---

##### `OrderByInput`<sup>Optional</sup> <a name="OrderByInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderByInput"></a>

```csharp
public string OrderByInput { get; }
```

- *Type:* string

---

##### `OrderBy`<sup>Required</sup> <a name="OrderBy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.orderBy"></a>

```csharp
public string OrderBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableClusteringKeyColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableClusteringKeyColumns">CassandraTableClusteringKeyColumns</a>

---


### CassandraTableEncryptionSpecificationOutputReference <a name="CassandraTableEncryptionSpecificationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableEncryptionSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.resetKmsKeyIdentifier"></a>

```csharp
private void ResetKmsKeyIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifierInput"></a>

```csharp
public string KmsKeyIdentifierInput { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.kmsKeyIdentifier"></a>

```csharp
public string KmsKeyIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecificationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableEncryptionSpecification InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableEncryptionSpecification">CassandraTableEncryptionSpecification</a>

---


### CassandraTablePartitionKeyColumnsList <a name="CassandraTablePartitionKeyColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTablePartitionKeyColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get"></a>

```csharp
private CassandraTablePartitionKeyColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraTablePartitionKeyColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>[]

---


### CassandraTablePartitionKeyColumnsOutputReference <a name="CassandraTablePartitionKeyColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTablePartitionKeyColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnTypeInput"></a>

```csharp
public string ColumnTypeInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTablePartitionKeyColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTablePartitionKeyColumns">CassandraTablePartitionKeyColumns</a>

---


### CassandraTableRegularColumnsList <a name="CassandraTableRegularColumnsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableRegularColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get"></a>

```csharp
private CassandraTableRegularColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableRegularColumns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>[]

---


### CassandraTableRegularColumnsOutputReference <a name="CassandraTableRegularColumnsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableRegularColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnName"></a>

```csharp
private void ResetColumnName()
```

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.resetColumnType"></a>

```csharp
private void ResetColumnType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnNameInput"></a>

```csharp
public string ColumnNameInput { get; }
```

- *Type:* string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnTypeInput"></a>

```csharp
public string ColumnTypeInput { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableRegularColumns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableRegularColumns">CassandraTableRegularColumns</a>

---


### CassandraTableReplicaSpecificationsList <a name="CassandraTableReplicaSpecificationsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get"></a>

```csharp
private CassandraTableReplicaSpecificationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecifications[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>[]

---


### CassandraTableReplicaSpecificationsOutputReference <a name="CassandraTableReplicaSpecificationsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling">PutReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityAutoScaling">ResetReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityUnits">ResetReadCapacityUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReadCapacityAutoScaling` <a name="PutReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling"></a>

```csharp
private void PutReadCapacityAutoScaling(CassandraTableReplicaSpecificationsReadCapacityAutoScaling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.putReadCapacityAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---

##### `ResetReadCapacityAutoScaling` <a name="ResetReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityAutoScaling"></a>

```csharp
private void ResetReadCapacityAutoScaling()
```

##### `ResetReadCapacityUnits` <a name="ResetReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetReadCapacityUnits"></a>

```csharp
private void ResetReadCapacityUnits()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScaling">ReadCapacityAutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScalingInput">ReadCapacityAutoScalingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnitsInput">ReadCapacityUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnits">ReadCapacityUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadCapacityAutoScaling`<sup>Required</sup> <a name="ReadCapacityAutoScaling" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScaling"></a>

```csharp
public CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference ReadCapacityAutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference</a>

---

##### `ReadCapacityAutoScalingInput`<sup>Optional</sup> <a name="ReadCapacityAutoScalingInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityAutoScalingInput"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecificationsReadCapacityAutoScaling ReadCapacityAutoScalingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---

##### `ReadCapacityUnitsInput`<sup>Optional</sup> <a name="ReadCapacityUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnitsInput"></a>

```csharp
public double ReadCapacityUnitsInput { get; }
```

- *Type:* double

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReadCapacityUnits`<sup>Required</sup> <a name="ReadCapacityUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.readCapacityUnits"></a>

```csharp
public double ReadCapacityUnits { get; }
```

- *Type:* double

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecifications InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecifications">CassandraTableReplicaSpecifications</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy">PutScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled">ResetAutoScalingDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits">ResetMaximumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits">ResetMinimumUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy">ResetScalingPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScalingPolicy` <a name="PutScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy"></a>

```csharp
private void PutScalingPolicy(CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.putScalingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `ResetAutoScalingDisabled` <a name="ResetAutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetAutoScalingDisabled"></a>

```csharp
private void ResetAutoScalingDisabled()
```

##### `ResetMaximumUnits` <a name="ResetMaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMaximumUnits"></a>

```csharp
private void ResetMaximumUnits()
```

##### `ResetMinimumUnits` <a name="ResetMinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetMinimumUnits"></a>

```csharp
private void ResetMinimumUnits()
```

##### `ResetScalingPolicy` <a name="ResetScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.resetScalingPolicy"></a>

```csharp
private void ResetScalingPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy">ScalingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput">AutoScalingDisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput">MaximumUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput">MinimumUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput">ScalingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled">AutoScalingDisabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits">MaximumUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits">MinimumUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScalingPolicy`<sup>Required</sup> <a name="ScalingPolicy" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicy"></a>

```csharp
public CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference ScalingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference</a>

---

##### `AutoScalingDisabledInput`<sup>Optional</sup> <a name="AutoScalingDisabledInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabledInput"></a>

```csharp
public bool|IResolvable AutoScalingDisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumUnitsInput`<sup>Optional</sup> <a name="MaximumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnitsInput"></a>

```csharp
public double MaximumUnitsInput { get; }
```

- *Type:* double

---

##### `MinimumUnitsInput`<sup>Optional</sup> <a name="MinimumUnitsInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnitsInput"></a>

```csharp
public double MinimumUnitsInput { get; }
```

- *Type:* double

---

##### `ScalingPolicyInput`<sup>Optional</sup> <a name="ScalingPolicyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.scalingPolicyInput"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy ScalingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---

##### `AutoScalingDisabled`<sup>Required</sup> <a name="AutoScalingDisabled" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.autoScalingDisabled"></a>

```csharp
public bool|IResolvable AutoScalingDisabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaximumUnits`<sup>Required</sup> <a name="MaximumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.maximumUnits"></a>

```csharp
public double MaximumUnits { get; }
```

- *Type:* double

---

##### `MinimumUnits`<sup>Required</sup> <a name="MinimumUnits" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.minimumUnits"></a>

```csharp
public double MinimumUnits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecificationsReadCapacityAutoScaling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScaling">CassandraTableReplicaSpecificationsReadCapacityAutoScaling</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration">PutTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration">ResetTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetTrackingScalingPolicyConfiguration` <a name="PutTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration"></a>

```csharp
private void PutTargetTrackingScalingPolicyConfiguration(CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.putTargetTrackingScalingPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `ResetTargetTrackingScalingPolicyConfiguration` <a name="ResetTargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.resetTargetTrackingScalingPolicyConfiguration"></a>

```csharp
private void ResetTargetTrackingScalingPolicyConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration">TargetTrackingScalingPolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput">TargetTrackingScalingPolicyConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetTrackingScalingPolicyConfiguration`<sup>Required</sup> <a name="TargetTrackingScalingPolicyConfiguration" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfiguration"></a>

```csharp
public CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference TargetTrackingScalingPolicyConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference</a>

---

##### `TargetTrackingScalingPolicyConfigurationInput`<sup>Optional</sup> <a name="TargetTrackingScalingPolicyConfigurationInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.targetTrackingScalingPolicyConfigurationInput"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration TargetTrackingScalingPolicyConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicy</a>

---


### CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference <a name="CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn">ResetDisableScaleIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown">ResetScaleInCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown">ResetScaleOutCooldown</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableScaleIn` <a name="ResetDisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetDisableScaleIn"></a>

```csharp
private void ResetDisableScaleIn()
```

##### `ResetScaleInCooldown` <a name="ResetScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleInCooldown"></a>

```csharp
private void ResetScaleInCooldown()
```

##### `ResetScaleOutCooldown` <a name="ResetScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetScaleOutCooldown"></a>

```csharp
private void ResetScaleOutCooldown()
```

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput">DisableScaleInInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput">ScaleInCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput">ScaleOutCooldownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn">DisableScaleIn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown">ScaleInCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown">ScaleOutCooldown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableScaleInInput`<sup>Optional</sup> <a name="DisableScaleInInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleInInput"></a>

```csharp
public bool|IResolvable DisableScaleInInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScaleInCooldownInput`<sup>Optional</sup> <a name="ScaleInCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldownInput"></a>

```csharp
public double ScaleInCooldownInput { get; }
```

- *Type:* double

---

##### `ScaleOutCooldownInput`<sup>Optional</sup> <a name="ScaleOutCooldownInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldownInput"></a>

```csharp
public double ScaleOutCooldownInput { get; }
```

- *Type:* double

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `DisableScaleIn`<sup>Required</sup> <a name="DisableScaleIn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.disableScaleIn"></a>

```csharp
public bool|IResolvable DisableScaleIn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScaleInCooldown`<sup>Required</sup> <a name="ScaleInCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleInCooldown"></a>

```csharp
public double ScaleInCooldown { get; }
```

- *Type:* double

---

##### `ScaleOutCooldown`<sup>Required</sup> <a name="ScaleOutCooldown" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.scaleOutCooldown"></a>

```csharp
public double ScaleOutCooldown { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration">CassandraTableReplicaSpecificationsReadCapacityAutoScalingScalingPolicyTargetTrackingScalingPolicyConfiguration</a>

---


### CassandraTableTagsList <a name="CassandraTableTagsList" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get"></a>

```csharp
private CassandraTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>[]

---


### CassandraTableTagsOutputReference <a name="CassandraTableTagsOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableTags">CassandraTableTags</a>

---


### CassandraTableWarmThroughputOutputReference <a name="CassandraTableWarmThroughputOutputReference" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CassandraTableWarmThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetReadUnitsPerSecond">ResetReadUnitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetWriteUnitsPerSecond">ResetWriteUnitsPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReadUnitsPerSecond` <a name="ResetReadUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetReadUnitsPerSecond"></a>

```csharp
private void ResetReadUnitsPerSecond()
```

##### `ResetWriteUnitsPerSecond` <a name="ResetWriteUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.resetWriteUnitsPerSecond"></a>

```csharp
private void ResetWriteUnitsPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecondInput">ReadUnitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput">WriteUnitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecond">ReadUnitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecond">WriteUnitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReadUnitsPerSecondInput`<sup>Optional</sup> <a name="ReadUnitsPerSecondInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecondInput"></a>

```csharp
public double ReadUnitsPerSecondInput { get; }
```

- *Type:* double

---

##### `WriteUnitsPerSecondInput`<sup>Optional</sup> <a name="WriteUnitsPerSecondInput" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecondInput"></a>

```csharp
public double WriteUnitsPerSecondInput { get; }
```

- *Type:* double

---

##### `ReadUnitsPerSecond`<sup>Required</sup> <a name="ReadUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.readUnitsPerSecond"></a>

```csharp
public double ReadUnitsPerSecond { get; }
```

- *Type:* double

---

##### `WriteUnitsPerSecond`<sup>Required</sup> <a name="WriteUnitsPerSecond" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.writeUnitsPerSecond"></a>

```csharp
public double WriteUnitsPerSecond { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CassandraTableWarmThroughput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cassandraTable.CassandraTableWarmThroughput">CassandraTableWarmThroughput</a>

---



