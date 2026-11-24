# `kinesisanalyticsv2Snapshot` Submodule <a name="`kinesisanalyticsv2Snapshot` Submodule" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2Snapshot <a name="Kinesisanalyticsv2Snapshot" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot awscc_kinesisanalyticsv2_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2Snapshot(Construct Scope, string Id, Kinesisanalyticsv2SnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig">Kinesisanalyticsv2SnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig">Kinesisanalyticsv2SnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration">PutImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription">PutSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetImportSourceConfiguration">ResetImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotDescription">ResetSnapshotDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotEncryptionConfigurationDescription">ResetSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotFormat">ResetSnapshotFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImportSourceConfiguration` <a name="PutImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration"></a>

```csharp
private void PutImportSourceConfiguration(Kinesisanalyticsv2SnapshotImportSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putImportSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---

##### `PutSnapshotEncryptionConfigurationDescription` <a name="PutSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription"></a>

```csharp
private void PutSnapshotEncryptionConfigurationDescription(Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putSnapshotEncryptionConfigurationDescription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags"></a>

```csharp
private void PutTags(IResolvable|Kinesisanalyticsv2SnapshotTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

---

##### `ResetApplicationName` <a name="ResetApplicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetApplicationName"></a>

```csharp
private void ResetApplicationName()
```

##### `ResetImportSourceConfiguration` <a name="ResetImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetImportSourceConfiguration"></a>

```csharp
private void ResetImportSourceConfiguration()
```

##### `ResetSnapshotDescription` <a name="ResetSnapshotDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotDescription"></a>

```csharp
private void ResetSnapshotDescription()
```

##### `ResetSnapshotEncryptionConfigurationDescription` <a name="ResetSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotEncryptionConfigurationDescription"></a>

```csharp
private void ResetSnapshotEncryptionConfigurationDescription()
```

##### `ResetSnapshotFormat` <a name="ResetSnapshotFormat" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetSnapshotFormat"></a>

```csharp
private void ResetSnapshotFormat()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Kinesisanalyticsv2Snapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Kinesisanalyticsv2Snapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Kinesisanalyticsv2Snapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Kinesisanalyticsv2Snapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Kinesisanalyticsv2Snapshot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Kinesisanalyticsv2Snapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Kinesisanalyticsv2Snapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Kinesisanalyticsv2Snapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfiguration">ImportSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.runtimeEnvironment">RuntimeEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotArn">SnapshotArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp">SnapshotCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription">SnapshotEncryptionConfigurationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiator">SnapshotInitiator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation">SnapshotInitiatorOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSizeInBytes">SnapshotSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSourceDescription">SnapshotSourceDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotStatus">SnapshotStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList">Kinesisanalyticsv2SnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationNameInput">ApplicationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfigurationInput">ImportSourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescriptionInput">SnapshotDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescriptionInput">SnapshotEncryptionConfigurationDescriptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormatInput">SnapshotFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescription">SnapshotDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormat">SnapshotFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImportSourceConfiguration`<sup>Required</sup> <a name="ImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfiguration"></a>

```csharp
public Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference ImportSourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference</a>

---

##### `RuntimeEnvironment`<sup>Required</sup> <a name="RuntimeEnvironment" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.runtimeEnvironment"></a>

```csharp
public string RuntimeEnvironment { get; }
```

- *Type:* string

---

##### `SnapshotArn`<sup>Required</sup> <a name="SnapshotArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotArn"></a>

```csharp
public string SnapshotArn { get; }
```

- *Type:* string

---

##### `SnapshotCreationTimestamp`<sup>Required</sup> <a name="SnapshotCreationTimestamp" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotCreationTimestamp"></a>

```csharp
public string SnapshotCreationTimestamp { get; }
```

- *Type:* string

---

##### `SnapshotEncryptionConfigurationDescription`<sup>Required</sup> <a name="SnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescription"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference SnapshotEncryptionConfigurationDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference</a>

---

##### `SnapshotInitiator`<sup>Required</sup> <a name="SnapshotInitiator" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiator"></a>

```csharp
public string SnapshotInitiator { get; }
```

- *Type:* string

---

##### `SnapshotInitiatorOperation`<sup>Required</sup> <a name="SnapshotInitiatorOperation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotInitiatorOperation"></a>

```csharp
public string SnapshotInitiatorOperation { get; }
```

- *Type:* string

---

##### `SnapshotSizeInBytes`<sup>Required</sup> <a name="SnapshotSizeInBytes" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSizeInBytes"></a>

```csharp
public double SnapshotSizeInBytes { get; }
```

- *Type:* double

---

##### `SnapshotSourceDescription`<sup>Required</sup> <a name="SnapshotSourceDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotSourceDescription"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference SnapshotSourceDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference</a>

---

##### `SnapshotStatus`<sup>Required</sup> <a name="SnapshotStatus" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotStatus"></a>

```csharp
public string SnapshotStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tags"></a>

```csharp
public Kinesisanalyticsv2SnapshotTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList">Kinesisanalyticsv2SnapshotTagsList</a>

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationNameInput"></a>

```csharp
public string ApplicationNameInput { get; }
```

- *Type:* string

---

##### `ImportSourceConfigurationInput`<sup>Optional</sup> <a name="ImportSourceConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.importSourceConfigurationInput"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotImportSourceConfiguration ImportSourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---

##### `SnapshotDescriptionInput`<sup>Optional</sup> <a name="SnapshotDescriptionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescriptionInput"></a>

```csharp
public string SnapshotDescriptionInput { get; }
```

- *Type:* string

---

##### `SnapshotEncryptionConfigurationDescriptionInput`<sup>Optional</sup> <a name="SnapshotEncryptionConfigurationDescriptionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotEncryptionConfigurationDescriptionInput"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription SnapshotEncryptionConfigurationDescriptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---

##### `SnapshotFormatInput`<sup>Optional</sup> <a name="SnapshotFormatInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormatInput"></a>

```csharp
public string SnapshotFormatInput { get; }
```

- *Type:* string

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tagsInput"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `SnapshotDescription`<sup>Required</sup> <a name="SnapshotDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotDescription"></a>

```csharp
public string SnapshotDescription { get; }
```

- *Type:* string

---

##### `SnapshotFormat`<sup>Required</sup> <a name="SnapshotFormat" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotFormat"></a>

```csharp
public string SnapshotFormat { get; }
```

- *Type:* string

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2Snapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2SnapshotConfig <a name="Kinesisanalyticsv2SnapshotConfig" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SnapshotName,
    string ApplicationName = null,
    Kinesisanalyticsv2SnapshotImportSourceConfiguration ImportSourceConfiguration = null,
    string SnapshotDescription = null,
    Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription SnapshotEncryptionConfigurationDescription = null,
    string SnapshotFormat = null,
    IResolvable|Kinesisanalyticsv2SnapshotTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | The customer-chosen name of the snapshot, unique within the account. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.applicationName">ApplicationName</a></code> | <code>string</code> | The name of the Managed Service for Apache Flink application to snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.importSourceConfiguration">ImportSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | The Amazon S3 location and role to import the snapshot from, with ImportSnapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotDescription">SnapshotDescription</a></code> | <code>string</code> | Optional customer-supplied description of the snapshot. Immutable after create. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotEncryptionConfigurationDescription">SnapshotEncryptionConfigurationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | The encryption of the snapshot. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotFormat">SnapshotFormat</a></code> | <code>string</code> | The format of the snapshot (CANONICAL). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]</code> | Tags to apply to the snapshot. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

The customer-chosen name of the snapshot, unique within the account. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_name Kinesisanalyticsv2Snapshot#snapshot_name}

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.applicationName"></a>

```csharp
public string ApplicationName { get; set; }
```

- *Type:* string

The name of the Managed Service for Apache Flink application to snapshot.

Used only at create time to select the source application; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#application_name Kinesisanalyticsv2Snapshot#application_name}

---

##### `ImportSourceConfiguration`<sup>Optional</sup> <a name="ImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.importSourceConfiguration"></a>

```csharp
public Kinesisanalyticsv2SnapshotImportSourceConfiguration ImportSourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

The Amazon S3 location and role to import the snapshot from, with ImportSnapshot.

Used only at create time; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_source_configuration Kinesisanalyticsv2Snapshot#import_source_configuration}

---

##### `SnapshotDescription`<sup>Optional</sup> <a name="SnapshotDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotDescription"></a>

```csharp
public string SnapshotDescription { get; set; }
```

- *Type:* string

Optional customer-supplied description of the snapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_description Kinesisanalyticsv2Snapshot#snapshot_description}

---

##### `SnapshotEncryptionConfigurationDescription`<sup>Optional</sup> <a name="SnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotEncryptionConfigurationDescription"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription SnapshotEncryptionConfigurationDescription { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

The encryption of the snapshot.

Can be set only with ImportSourceConfiguration (sent as the ImportSnapshot DestinationEncryptionConfiguration; the AWS owned key when omitted). A snapshot taken from ApplicationName uses the application's encryption: DescribeSnapshot returns it for such snapshots, but it must not be set with ApplicationName. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_encryption_configuration_description Kinesisanalyticsv2Snapshot#snapshot_encryption_configuration_description}

---

##### `SnapshotFormat`<sup>Optional</sup> <a name="SnapshotFormat" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.snapshotFormat"></a>

```csharp
public string SnapshotFormat { get; set; }
```

- *Type:* string

The format of the snapshot (CANONICAL).

Sent to ImportSnapshot with ImportSourceConfiguration; with ApplicationName it may only be CANONICAL, the format CreateSnapshot produces. Returned by DescribeSnapshot. Immutable after create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#snapshot_format Kinesisanalyticsv2Snapshot#snapshot_format}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotConfig.property.tags"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

Tags to apply to the snapshot.

Applied at create time (with CreateSnapshot, or with TagResource right after ImportSnapshot) and updated in place with TagResource and UntagResource. Tag keys must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#tags Kinesisanalyticsv2Snapshot#tags}

---

### Kinesisanalyticsv2SnapshotImportSourceConfiguration <a name="Kinesisanalyticsv2SnapshotImportSourceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotImportSourceConfiguration {
    string ImportRoleArn = null,
    Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration SourceEncryptionConfiguration = null,
    Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation SourceS3PrefixLocation = null,
    string SourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.importRoleArn">ImportRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key). |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceEncryptionConfiguration">SourceEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | The encryption of the snapshot files in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceS3PrefixLocation">SourceS3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceType">SourceType</a></code> | <code>string</code> | The type of storage the snapshot is imported from. |

---

##### `ImportRoleArn`<sup>Optional</sup> <a name="ImportRoleArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.importRoleArn"></a>

```csharp
public string ImportRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#import_role_arn Kinesisanalyticsv2Snapshot#import_role_arn}

---

##### `SourceEncryptionConfiguration`<sup>Optional</sup> <a name="SourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceEncryptionConfiguration"></a>

```csharp
public Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration SourceEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

The encryption of the snapshot files in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_encryption_configuration Kinesisanalyticsv2Snapshot#source_encryption_configuration}

---

##### `SourceS3PrefixLocation`<sup>Optional</sup> <a name="SourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceS3PrefixLocation"></a>

```csharp
public Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation SourceS3PrefixLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_s3_prefix_location Kinesisanalyticsv2Snapshot#source_s3_prefix_location}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

The type of storage the snapshot is imported from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#source_type Kinesisanalyticsv2Snapshot#source_type}

---

### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration {
    string KeyId = null,
    string KeyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyId">KeyId</a></code> | <code>string</code> | The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyType">KeyType</a></code> | <code>string</code> | The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation {
    string BucketArn = null,
    string KeyPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.bucketArn">BucketArn</a></code> | <code>string</code> | The ARN of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | The S3 key prefix. |

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.bucketArn"></a>

```csharp
public string BucketArn { get; set; }
```

- *Type:* string

The ARN of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#bucket_arn Kinesisanalyticsv2Snapshot#bucket_arn}

---

##### `KeyPrefix`<sup>Optional</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; set; }
```

- *Type:* string

The S3 key prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_prefix Kinesisanalyticsv2Snapshot#key_prefix}

---

### Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription <a name="Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription {
    string KeyId = null,
    string KeyType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyId">KeyId</a></code> | <code>string</code> | The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyType">KeyType</a></code> | <code>string</code> | The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_id Kinesisanalyticsv2Snapshot#key_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key_type Kinesisanalyticsv2Snapshot#key_type}

---

### Kinesisanalyticsv2SnapshotSnapshotSourceDescription <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotSourceDescription {

};
```


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation {

};
```


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription {

};
```


### Kinesisanalyticsv2SnapshotTags <a name="Kinesisanalyticsv2SnapshotTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#key Kinesisanalyticsv2Snapshot#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/kinesisanalyticsv2_snapshot#value Kinesisanalyticsv2Snapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration">PutSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation">PutSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetImportRoleArn">ResetImportRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceEncryptionConfiguration">ResetSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceS3PrefixLocation">ResetSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceEncryptionConfiguration` <a name="PutSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration"></a>

```csharp
private void PutSourceEncryptionConfiguration(Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---

##### `PutSourceS3PrefixLocation` <a name="PutSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation"></a>

```csharp
private void PutSourceS3PrefixLocation(Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.putSourceS3PrefixLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---

##### `ResetImportRoleArn` <a name="ResetImportRoleArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetImportRoleArn"></a>

```csharp
private void ResetImportRoleArn()
```

##### `ResetSourceEncryptionConfiguration` <a name="ResetSourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceEncryptionConfiguration"></a>

```csharp
private void ResetSourceEncryptionConfiguration()
```

##### `ResetSourceS3PrefixLocation` <a name="ResetSourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceS3PrefixLocation"></a>

```csharp
private void ResetSourceS3PrefixLocation()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.resetSourceType"></a>

```csharp
private void ResetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration">SourceEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation">SourceS3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArnInput">ImportRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfigurationInput">SourceEncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocationInput">SourceS3PrefixLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn">ImportRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceEncryptionConfiguration`<sup>Required</sup> <a name="SourceEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfiguration"></a>

```csharp
public Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference SourceEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference</a>

---

##### `SourceS3PrefixLocation`<sup>Required</sup> <a name="SourceS3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocation"></a>

```csharp
public Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference SourceS3PrefixLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference</a>

---

##### `ImportRoleArnInput`<sup>Optional</sup> <a name="ImportRoleArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArnInput"></a>

```csharp
public string ImportRoleArnInput { get; }
```

- *Type:* string

---

##### `SourceEncryptionConfigurationInput`<sup>Optional</sup> <a name="SourceEncryptionConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceEncryptionConfigurationInput"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration SourceEncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---

##### `SourceS3PrefixLocationInput`<sup>Optional</sup> <a name="SourceS3PrefixLocationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceS3PrefixLocationInput"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation SourceS3PrefixLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `ImportRoleArn`<sup>Required</sup> <a name="ImportRoleArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.importRoleArn"></a>

```csharp
public string ImportRoleArn { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotImportSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfiguration</a>

---


### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.resetKeyType"></a>

```csharp
private void ResetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceEncryptionConfiguration</a>

---


### Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference <a name="Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetKeyPrefix">ResetKeyPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetBucketArn"></a>

```csharp
private void ResetBucketArn()
```

##### `ResetKeyPrefix` <a name="ResetKeyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.resetKeyPrefix"></a>

```csharp
private void ResetKeyPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefixInput">KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArnInput"></a>

```csharp
public string BucketArnInput { get; }
```

- *Type:* string

---

##### `KeyPrefixInput`<sup>Optional</sup> <a name="KeyPrefixInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefixInput"></a>

```csharp
public string KeyPrefixInput { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation">Kinesisanalyticsv2SnapshotImportSourceConfigurationSourceS3PrefixLocation</a>

---


### Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.resetKeyType"></a>

```csharp
private void ResetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescriptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription">Kinesisanalyticsv2SnapshotSnapshotEncryptionConfigurationDescription</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation">S3PrefixLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription">SourceApplicationDescription</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3PrefixLocation`<sup>Required</sup> <a name="S3PrefixLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.s3PrefixLocation"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference S3PrefixLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference</a>

---

##### `SourceApplicationDescription`<sup>Required</sup> <a name="SourceApplicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.sourceApplicationDescription"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference SourceApplicationDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionOutputReference.property.internalValue"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotSourceDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescription</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn">BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix">KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.bucketArn"></a>

```csharp
public string BucketArn { get; }
```

- *Type:* string

---

##### `KeyPrefix`<sup>Required</sup> <a name="KeyPrefix" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.keyPrefix"></a>

```csharp
public string KeyPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocationOutputReference.property.internalValue"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionS3PrefixLocation</a>

---


### Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference <a name="Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp">ApplicationCreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName">ApplicationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId">ApplicationVersionId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationCreationTimestamp`<sup>Required</sup> <a name="ApplicationCreationTimestamp" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationCreationTimestamp"></a>

```csharp
public string ApplicationCreationTimestamp { get; }
```

- *Type:* string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationName"></a>

```csharp
public string ApplicationName { get; }
```

- *Type:* string

---

##### `ApplicationVersionId`<sup>Required</sup> <a name="ApplicationVersionId" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.applicationVersionId"></a>

```csharp
public double ApplicationVersionId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescriptionOutputReference.property.internalValue"></a>

```csharp
public Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription">Kinesisanalyticsv2SnapshotSnapshotSourceDescriptionSourceApplicationDescription</a>

---


### Kinesisanalyticsv2SnapshotTagsList <a name="Kinesisanalyticsv2SnapshotTagsList" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get"></a>

```csharp
private Kinesisanalyticsv2SnapshotTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsList.property.internalValue"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>[]

---


### Kinesisanalyticsv2SnapshotTagsOutputReference <a name="Kinesisanalyticsv2SnapshotTagsOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Kinesisanalyticsv2SnapshotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Kinesisanalyticsv2SnapshotTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Snapshot.Kinesisanalyticsv2SnapshotTags">Kinesisanalyticsv2SnapshotTags</a>

---



