# `s3TablesTable` Submodule <a name="`s3TablesTable` Submodule" id="@cdktn/provider-awscc.s3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTable <a name="S3TablesTable" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table awscc_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTable(Construct Scope, string Id, S3TablesTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction">PutCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata">PutIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement">PutSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration">PutStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction">ResetCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata">ResetIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement">ResetSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration">ResetStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata">ResetWithoutMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompaction` <a name="PutCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction"></a>

```csharp
private void PutCompaction(S3TablesTableCompaction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---

##### `PutIcebergMetadata` <a name="PutIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata"></a>

```csharp
private void PutIcebergMetadata(S3TablesTableIcebergMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---

##### `PutSnapshotManagement` <a name="PutSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement"></a>

```csharp
private void PutSnapshotManagement(S3TablesTableSnapshotManagement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---

##### `PutStorageClassConfiguration` <a name="PutStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration"></a>

```csharp
private void PutStorageClassConfiguration(S3TablesTableStorageClassConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags"></a>

```csharp
private void PutTags(IResolvable|S3TablesTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

---

##### `ResetCompaction` <a name="ResetCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction"></a>

```csharp
private void ResetCompaction()
```

##### `ResetIcebergMetadata` <a name="ResetIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata"></a>

```csharp
private void ResetIcebergMetadata()
```

##### `ResetSnapshotManagement` <a name="ResetSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement"></a>

```csharp
private void ResetSnapshotManagement()
```

##### `ResetStorageClassConfiguration` <a name="ResetStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration"></a>

```csharp
private void ResetStorageClassConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWithoutMetadata` <a name="ResetWithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata"></a>

```csharp
private void ResetWithoutMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3TablesTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3TablesTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3TablesTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3TablesTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3TablesTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction">Compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata">IcebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement">SnapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration">StorageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn">TableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken">VersionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation">WarehouseLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput">CompactionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput">IcebergMetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput">OpenTableFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput">SnapshotManagementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput">StorageClassConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput">TableBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput">WithoutMetadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat">OpenTableFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn">TableBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata">WithoutMetadata</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Compaction`<sup>Required</sup> <a name="Compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction"></a>

```csharp
public S3TablesTableCompactionOutputReference Compaction { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a>

---

##### `IcebergMetadata`<sup>Required</sup> <a name="IcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata"></a>

```csharp
public S3TablesTableIcebergMetadataOutputReference IcebergMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SnapshotManagement`<sup>Required</sup> <a name="SnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement"></a>

```csharp
public S3TablesTableSnapshotManagementOutputReference SnapshotManagement { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a>

---

##### `StorageClassConfiguration`<sup>Required</sup> <a name="StorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration"></a>

```csharp
public S3TablesTableStorageClassConfigurationOutputReference StorageClassConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a>

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn"></a>

```csharp
public string TableArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags"></a>

```csharp
public S3TablesTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a>

---

##### `VersionToken`<sup>Required</sup> <a name="VersionToken" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken"></a>

```csharp
public string VersionToken { get; }
```

- *Type:* string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation"></a>

```csharp
public string WarehouseLocation { get; }
```

- *Type:* string

---

##### `CompactionInput`<sup>Optional</sup> <a name="CompactionInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput"></a>

```csharp
public IResolvable|S3TablesTableCompaction CompactionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---

##### `IcebergMetadataInput`<sup>Optional</sup> <a name="IcebergMetadataInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadata IcebergMetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OpenTableFormatInput`<sup>Optional</sup> <a name="OpenTableFormatInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput"></a>

```csharp
public string OpenTableFormatInput { get; }
```

- *Type:* string

---

##### `SnapshotManagementInput`<sup>Optional</sup> <a name="SnapshotManagementInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput"></a>

```csharp
public IResolvable|S3TablesTableSnapshotManagement SnapshotManagementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---

##### `StorageClassConfigurationInput`<sup>Optional</sup> <a name="StorageClassConfigurationInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput"></a>

```csharp
public IResolvable|S3TablesTableStorageClassConfiguration StorageClassConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---

##### `TableBucketArnInput`<sup>Optional</sup> <a name="TableBucketArnInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput"></a>

```csharp
public string TableBucketArnInput { get; }
```

- *Type:* string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput"></a>

```csharp
public IResolvable|S3TablesTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

---

##### `WithoutMetadataInput`<sup>Optional</sup> <a name="WithoutMetadataInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput"></a>

```csharp
public string WithoutMetadataInput { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `OpenTableFormat`<sup>Required</sup> <a name="OpenTableFormat" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat"></a>

```csharp
public string OpenTableFormat { get; }
```

- *Type:* string

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn"></a>

```csharp
public string TableBucketArn { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `WithoutMetadata`<sup>Required</sup> <a name="WithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata"></a>

```csharp
public string WithoutMetadata { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableCompaction <a name="S3TablesTableCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableCompaction {
    string Status = null,
    double TargetFileSizeMb = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status">Status</a></code> | <code>string</code> | Indicates whether the Compaction maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>double</code> | The target file size for the table in MB. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Indicates whether the Compaction maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

##### `TargetFileSizeMb`<sup>Optional</sup> <a name="TargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb"></a>

```csharp
public double TargetFileSizeMb { get; set; }
```

- *Type:* double

The target file size for the table in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}

---

### S3TablesTableConfig <a name="S3TablesTableConfig" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Namespace,
    string OpenTableFormat,
    string TableBucketArn,
    string TableName,
    S3TablesTableCompaction Compaction = null,
    S3TablesTableIcebergMetadata IcebergMetadata = null,
    S3TablesTableSnapshotManagement SnapshotManagement = null,
    S3TablesTableStorageClassConfiguration StorageClassConfiguration = null,
    IResolvable|S3TablesTableTags[] Tags = null,
    string WithoutMetadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace">Namespace</a></code> | <code>string</code> | The namespace that the table belongs to. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat">OpenTableFormat</a></code> | <code>string</code> | Format of the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn">TableBucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the specified table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName">TableName</a></code> | <code>string</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction">Compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata">IcebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | Contains details about the metadata for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement">SnapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | Contains details about the snapshot management settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration">StorageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | Specifies storage class settings for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]</code> | User tags (key-value pairs) to associate with the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata">WithoutMetadata</a></code> | <code>string</code> | Indicates that you don't want to specify a schema for the table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}

---

##### `OpenTableFormat`<sup>Required</sup> <a name="OpenTableFormat" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat"></a>

```csharp
public string OpenTableFormat { get; set; }
```

- *Type:* string

Format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#open_table_format S3TablesTable#open_table_format}

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn"></a>

```csharp
public string TableBucketArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the specified table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

The name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#table_name S3TablesTable#table_name}

---

##### `Compaction`<sup>Optional</sup> <a name="Compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction"></a>

```csharp
public S3TablesTableCompaction Compaction { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#compaction S3TablesTable#compaction}

---

##### `IcebergMetadata`<sup>Optional</sup> <a name="IcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata"></a>

```csharp
public S3TablesTableIcebergMetadata IcebergMetadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

Contains details about the metadata for an Iceberg table.

Specify either IcebergSchema (for simple flat schemas with primitive types only) or IcebergSchemaV2 (for schemas with nested types like struct, list, map), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#iceberg_metadata S3TablesTable#iceberg_metadata}

---

##### `SnapshotManagement`<sup>Optional</sup> <a name="SnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement"></a>

```csharp
public S3TablesTableSnapshotManagement SnapshotManagement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

Contains details about the snapshot management settings for an Iceberg table.

A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#snapshot_management S3TablesTable#snapshot_management}

---

##### `StorageClassConfiguration`<sup>Optional</sup> <a name="StorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration"></a>

```csharp
public S3TablesTableStorageClassConfiguration StorageClassConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

Specifies storage class settings for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#storage_class_configuration S3TablesTable#storage_class_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags"></a>

```csharp
public IResolvable|S3TablesTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

User tags (key-value pairs) to associate with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#tags S3TablesTable#tags}

---

##### `WithoutMetadata`<sup>Optional</sup> <a name="WithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata"></a>

```csharp
public string WithoutMetadata { get; set; }
```

- *Type:* string

Indicates that you don't want to specify a schema for the table.

This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#without_metadata S3TablesTable#without_metadata}

---

### S3TablesTableIcebergMetadata <a name="S3TablesTableIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadata {
    S3TablesTableIcebergMetadataIcebergPartitionSpec IcebergPartitionSpec = null,
    S3TablesTableIcebergMetadataIcebergSchema IcebergSchema = null,
    S3TablesTableIcebergMetadataIcebergSchemaV2 IcebergSchemaV2 = null,
    S3TablesTableIcebergMetadataIcebergSortOrder IcebergSortOrder = null,
    System.Collections.Generic.IDictionary<string, string> TableProperties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec">IcebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | Partition specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema">IcebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2">IcebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder">IcebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | Sort order specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties">TableProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Iceberg table properties (e.g., format-version, write.parquet.compression-codec). |

---

##### `IcebergPartitionSpec`<sup>Optional</sup> <a name="IcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergPartitionSpec IcebergPartitionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

Partition specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#iceberg_partition_spec S3TablesTable#iceberg_partition_spec}

---

##### `IcebergSchema`<sup>Optional</sup> <a name="IcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSchema IcebergSchema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#iceberg_schema S3TablesTable#iceberg_schema}

---

##### `IcebergSchemaV2`<sup>Optional</sup> <a name="IcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSchemaV2 IcebergSchemaV2 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#iceberg_schema_v2 S3TablesTable#iceberg_schema_v2}

---

##### `IcebergSortOrder`<sup>Optional</sup> <a name="IcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSortOrder IcebergSortOrder { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

Sort order specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#iceberg_sort_order S3TablesTable#iceberg_sort_order}

---

##### `TableProperties`<sup>Optional</sup> <a name="TableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TableProperties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Iceberg table properties (e.g., format-version, write.parquet.compression-codec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#table_properties S3TablesTable#table_properties}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpec <a name="S3TablesTableIcebergMetadataIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergPartitionSpec {
    IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] Fields = null,
    double SpecId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]</code> | List of partition fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId">SpecId</a></code> | <code>double</code> | The partition spec ID (defaults to 0 if not specified). |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `SpecId`<sup>Optional</sup> <a name="SpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId"></a>

```csharp
public double SpecId { get; set; }
```

- *Type:* double

The partition spec ID (defaults to 0 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#spec_id S3TablesTable#spec_id}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpecFields <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergPartitionSpecFields {
    double FieldId = null,
    string Name = null,
    double SourceId = null,
    string Transform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId">FieldId</a></code> | <code>double</code> | The partition field ID (auto-assigned starting from 1000 if not specified). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name">Name</a></code> | <code>string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId">SourceId</a></code> | <code>double</code> | The source column ID to partition on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform">Transform</a></code> | <code>string</code> | The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour). |

---

##### `FieldId`<sup>Optional</sup> <a name="FieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId"></a>

```csharp
public double FieldId { get; set; }
```

- *Type:* double

The partition field ID (auto-assigned starting from 1000 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#field_id S3TablesTable#field_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId"></a>

```csharp
public double SourceId { get; set; }
```

- *Type:* double

The source column ID to partition on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform"></a>

```csharp
public string Transform { get; set; }
```

- *Type:* string

The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableIcebergMetadataIcebergSchema <a name="S3TablesTableIcebergMetadataIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchema {
    IResolvable|S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] SchemaFieldList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList">SchemaFieldList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]</code> | Contains details about the schema for an Iceberg table. |

---

##### `SchemaFieldList`<sup>Optional</sup> <a name="SchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] SchemaFieldList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

Contains details about the schema for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#schema_field_list S3TablesTable#schema_field_list}

---

### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct {
    double Id = null,
    string Name = null,
    bool|IResolvable Required = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id">Id</a></code> | <code>double</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name">Name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type">Type</a></code> | <code>string</code> | The field type. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2 <a name="S3TablesTableIcebergMetadataIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaV2 {
    double[] IdentifierFieldIds = null,
    double SchemaId = null,
    IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] SchemaV2FieldList = null,
    string SchemaV2FieldType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>double[]</code> | A list of field IDs that are used as the identifier fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId">SchemaId</a></code> | <code>double</code> | An optional unique identifier for the schema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList">SchemaV2FieldList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]</code> | The schema fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType">SchemaV2FieldType</a></code> | <code>string</code> | The type of the top-level schema, which is always 'struct'. |

---

##### `IdentifierFieldIds`<sup>Optional</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds"></a>

```csharp
public double[] IdentifierFieldIds { get; set; }
```

- *Type:* double[]

A list of field IDs that are used as the identifier fields for the table.

Identifier fields uniquely identify a row in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#identifier_field_ids S3TablesTable#identifier_field_ids}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId"></a>

```csharp
public double SchemaId { get; set; }
```

- *Type:* double

An optional unique identifier for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#schema_id S3TablesTable#schema_id}

---

##### `SchemaV2FieldList`<sup>Optional</sup> <a name="SchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] SchemaV2FieldList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

The schema fields for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#schema_v2_field_list S3TablesTable#schema_v2_field_list}

---

##### `SchemaV2FieldType`<sup>Optional</sup> <a name="SchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType"></a>

```csharp
public string SchemaV2FieldType { get; set; }
```

- *Type:* string

The type of the top-level schema, which is always 'struct'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#schema_v2_field_type S3TablesTable#schema_v2_field_type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct {
    string Doc = null,
    double Id = null,
    string Name = null,
    bool|IResolvable Required = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc">Doc</a></code> | <code>string</code> | Optional documentation for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id">Id</a></code> | <code>double</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name">Name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type">Type</a></code> | <code>string</code> | The field type. |

---

##### `Doc`<sup>Optional</sup> <a name="Doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc"></a>

```csharp
public string Doc { get; set; }
```

- *Type:* string

Optional documentation for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#doc S3TablesTable#doc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id"></a>

```csharp
public double Id { get; set; }
```

- *Type:* double

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The field type.

For primitive types, use a string (e.g., 'int', 'string', 'long'). For nested types, use an object (e.g., {'type': 'struct', 'fields': [...]} for struct, {'type': 'list', 'element-id': N, 'element': 'type'} for list, {'type': 'map', 'key-id': N, 'key': 'type', 'value-id': N, 'value': 'type'} for map).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSortOrder <a name="S3TablesTableIcebergMetadataIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSortOrder {
    IResolvable|S3TablesTableIcebergMetadataIcebergSortOrderFields[] Fields = null,
    double OrderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]</code> | List of sort fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId">OrderId</a></code> | <code>double</code> | The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted). |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSortOrderFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

List of sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `OrderId`<sup>Optional</sup> <a name="OrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId"></a>

```csharp
public double OrderId { get; set; }
```

- *Type:* double

The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#order_id S3TablesTable#order_id}

---

### S3TablesTableIcebergMetadataIcebergSortOrderFields <a name="S3TablesTableIcebergMetadataIcebergSortOrderFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSortOrderFields {
    string Direction = null,
    string NullOrder = null,
    double SourceId = null,
    string Transform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction">Direction</a></code> | <code>string</code> | Sort direction (asc or desc). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder">NullOrder</a></code> | <code>string</code> | Null value ordering (nulls-first or nulls-last). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId">SourceId</a></code> | <code>double</code> | The source column ID to sort on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform">Transform</a></code> | <code>string</code> | The sort transform function. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

Sort direction (asc or desc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#direction S3TablesTable#direction}

---

##### `NullOrder`<sup>Optional</sup> <a name="NullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder"></a>

```csharp
public string NullOrder { get; set; }
```

- *Type:* string

Null value ordering (nulls-first or nulls-last).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#null_order S3TablesTable#null_order}

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId"></a>

```csharp
public double SourceId { get; set; }
```

- *Type:* double

The source column ID to sort on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform"></a>

```csharp
public string Transform { get; set; }
```

- *Type:* string

The sort transform function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableSnapshotManagement <a name="S3TablesTableSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableSnapshotManagement {
    double MaxSnapshotAgeHours = null,
    double MinSnapshotsToKeep = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>double</code> | The maximum age of a snapshot before it can be expired. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>double</code> | The minimum number of snapshots to keep. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status">Status</a></code> | <code>string</code> | Indicates whether the SnapshotManagement maintenance action is enabled. |

---

##### `MaxSnapshotAgeHours`<sup>Optional</sup> <a name="MaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours"></a>

```csharp
public double MaxSnapshotAgeHours { get; set; }
```

- *Type:* double

The maximum age of a snapshot before it can be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}

---

##### `MinSnapshotsToKeep`<sup>Optional</sup> <a name="MinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep"></a>

```csharp
public double MinSnapshotsToKeep { get; set; }
```

- *Type:* double

The minimum number of snapshots to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Indicates whether the SnapshotManagement maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

### S3TablesTableStorageClassConfiguration <a name="S3TablesTableStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableStorageClassConfiguration {
    string StorageClass = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass">StorageClass</a></code> | <code>string</code> | The storage class for the table. |

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

The storage class for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3tables_table#storage_class S3TablesTable#storage_class}

---

### S3TablesTableTags <a name="S3TablesTableTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key">Key</a></code> | <code>string</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value">Value</a></code> | <code>string</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableCompactionOutputReference <a name="S3TablesTableCompactionOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableCompactionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb">ResetTargetFileSizeMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTargetFileSizeMb` <a name="ResetTargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb"></a>

```csharp
private void ResetTargetFileSizeMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput">TargetFileSizeMbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TargetFileSizeMbInput`<sup>Optional</sup> <a name="TargetFileSizeMbInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput"></a>

```csharp
public double TargetFileSizeMbInput { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TargetFileSizeMb`<sup>Required</sup> <a name="TargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb"></a>

```csharp
public double TargetFileSizeMb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableCompaction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get"></a>

```csharp
private S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId">ResetFieldId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldId` <a name="ResetFieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId"></a>

```csharp
private void ResetFieldId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSourceId` <a name="ResetSourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId"></a>

```csharp
private void ResetSourceId()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform"></a>

```csharp
private void ResetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform">Transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```csharp
public double FieldIdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```csharp
public double SourceIdInput { get; }
```

- *Type:* double

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput"></a>

```csharp
public string TransformInput { get; }
```

- *Type:* string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId"></a>

```csharp
public double FieldId { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId"></a>

```csharp
public double SourceId { get; }
```

- *Type:* double

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform"></a>

```csharp
public string Transform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpecFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId">ResetSpecId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetSpecId` <a name="ResetSpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId"></a>

```csharp
private void ResetSpecId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput">SpecIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId">SpecId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpecFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields">S3TablesTableIcebergMetadataIcebergPartitionSpecFields</a>[]

---

##### `SpecIdInput`<sup>Optional</sup> <a name="SpecIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput"></a>

```csharp
public double SpecIdInput { get; }
```

- *Type:* double

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId"></a>

```csharp
public double SpecId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList">PutSchemaFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList">ResetSchemaFieldList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaFieldList` <a name="PutSchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList"></a>

```csharp
private void PutSchemaFieldList(IResolvable|S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

---

##### `ResetSchemaFieldList` <a name="ResetSchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList"></a>

```csharp
private void ResetSchemaFieldList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList">SchemaFieldList</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput">SchemaFieldListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaFieldList`<sup>Required</sup> <a name="SchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList SchemaFieldList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a>

---

##### `SchemaFieldListInput`<sup>Optional</sup> <a name="SchemaFieldListInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] SchemaFieldListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get"></a>

```csharp
private S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>[]

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList">PutSchemaV2FieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds">ResetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList">ResetSchemaV2FieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType">ResetSchemaV2FieldType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaV2FieldList` <a name="PutSchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList"></a>

```csharp
private void PutSchemaV2FieldList(IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

---

##### `ResetIdentifierFieldIds` <a name="ResetIdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds"></a>

```csharp
private void ResetIdentifierFieldIds()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId"></a>

```csharp
private void ResetSchemaId()
```

##### `ResetSchemaV2FieldList` <a name="ResetSchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList"></a>

```csharp
private void ResetSchemaV2FieldList()
```

##### `ResetSchemaV2FieldType` <a name="ResetSchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType"></a>

```csharp
private void ResetSchemaV2FieldType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList">SchemaV2FieldList</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput">IdentifierFieldIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput">SchemaV2FieldListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput">SchemaV2FieldTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId">SchemaId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType">SchemaV2FieldType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaV2FieldList`<sup>Required</sup> <a name="SchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList SchemaV2FieldList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a>

---

##### `IdentifierFieldIdsInput`<sup>Optional</sup> <a name="IdentifierFieldIdsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput"></a>

```csharp
public double[] IdentifierFieldIdsInput { get; }
```

- *Type:* double[]

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput"></a>

```csharp
public double SchemaIdInput { get; }
```

- *Type:* double

---

##### `SchemaV2FieldListInput`<sup>Optional</sup> <a name="SchemaV2FieldListInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] SchemaV2FieldListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

---

##### `SchemaV2FieldTypeInput`<sup>Optional</sup> <a name="SchemaV2FieldTypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput"></a>

```csharp
public string SchemaV2FieldTypeInput { get; }
```

- *Type:* string

---

##### `IdentifierFieldIds`<sup>Required</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds"></a>

```csharp
public double[] IdentifierFieldIds { get; }
```

- *Type:* double[]

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId"></a>

```csharp
public double SchemaId { get; }
```

- *Type:* double

---

##### `SchemaV2FieldType`<sup>Required</sup> <a name="SchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType"></a>

```csharp
public string SchemaV2FieldType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get"></a>

```csharp
private S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>[]

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc">ResetDoc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoc` <a name="ResetDoc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc"></a>

```csharp
private void ResetDoc()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput">DocInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput">IdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc">Doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id">Id</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocInput`<sup>Optional</sup> <a name="DocInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput"></a>

```csharp
public string DocInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput"></a>

```csharp
public double IdInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Doc`<sup>Required</sup> <a name="Doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc"></a>

```csharp
public string Doc { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id"></a>

```csharp
public double Id { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct</a>

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsList <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSortOrderFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get"></a>

```csharp
private S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSortOrderFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder">ResetNullOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetNullOrder` <a name="ResetNullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder"></a>

```csharp
private void ResetNullOrder()
```

##### `ResetSourceId` <a name="ResetSourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId"></a>

```csharp
private void ResetSourceId()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform"></a>

```csharp
private void ResetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput">NullOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder">NullOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform">Transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `NullOrderInput`<sup>Optional</sup> <a name="NullOrderInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```csharp
public string NullOrderInput { get; }
```

- *Type:* string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```csharp
public double SourceIdInput { get; }
```

- *Type:* double

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput"></a>

```csharp
public string TransformInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `NullOrder`<sup>Required</sup> <a name="NullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder"></a>

```csharp
public string NullOrder { get; }
```

- *Type:* string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId"></a>

```csharp
public double SourceId { get; }
```

- *Type:* double

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform"></a>

```csharp
public string Transform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSortOrderFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>

---


### S3TablesTableIcebergMetadataIcebergSortOrderOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataIcebergSortOrderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId">ResetOrderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|S3TablesTableIcebergMetadataIcebergSortOrderFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetOrderId` <a name="ResetOrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId"></a>

```csharp
private void ResetOrderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput">OrderIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId">OrderId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSortOrderFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSortOrderFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields">S3TablesTableIcebergMetadataIcebergSortOrderFields</a>[]

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput"></a>

```csharp
public double OrderIdInput { get; }
```

- *Type:* double

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId"></a>

```csharp
public double OrderId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSortOrder InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---


### S3TablesTableIcebergMetadataOutputReference <a name="S3TablesTableIcebergMetadataOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableIcebergMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec">PutIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema">PutIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2">PutIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder">PutIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec">ResetIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema">ResetIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2">ResetIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder">ResetIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties">ResetTableProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergPartitionSpec` <a name="PutIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec"></a>

```csharp
private void PutIcebergPartitionSpec(S3TablesTableIcebergMetadataIcebergPartitionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---

##### `PutIcebergSchema` <a name="PutIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema"></a>

```csharp
private void PutIcebergSchema(S3TablesTableIcebergMetadataIcebergSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---

##### `PutIcebergSchemaV2` <a name="PutIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2"></a>

```csharp
private void PutIcebergSchemaV2(S3TablesTableIcebergMetadataIcebergSchemaV2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---

##### `PutIcebergSortOrder` <a name="PutIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder"></a>

```csharp
private void PutIcebergSortOrder(S3TablesTableIcebergMetadataIcebergSortOrder Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---

##### `ResetIcebergPartitionSpec` <a name="ResetIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec"></a>

```csharp
private void ResetIcebergPartitionSpec()
```

##### `ResetIcebergSchema` <a name="ResetIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema"></a>

```csharp
private void ResetIcebergSchema()
```

##### `ResetIcebergSchemaV2` <a name="ResetIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2"></a>

```csharp
private void ResetIcebergSchemaV2()
```

##### `ResetIcebergSortOrder` <a name="ResetIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder"></a>

```csharp
private void ResetIcebergSortOrder()
```

##### `ResetTableProperties` <a name="ResetTableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties"></a>

```csharp
private void ResetTableProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec">IcebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema">IcebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2">IcebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder">IcebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput">IcebergPartitionSpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput">IcebergSchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input">IcebergSchemaV2Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput">IcebergSortOrderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput">TablePropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties">TableProperties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IcebergPartitionSpec`<sup>Required</sup> <a name="IcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference IcebergPartitionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a>

---

##### `IcebergSchema`<sup>Required</sup> <a name="IcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSchemaOutputReference IcebergSchema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a>

---

##### `IcebergSchemaV2`<sup>Required</sup> <a name="IcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference IcebergSchemaV2 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a>

---

##### `IcebergSortOrder`<sup>Required</sup> <a name="IcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder"></a>

```csharp
public S3TablesTableIcebergMetadataIcebergSortOrderOutputReference IcebergSortOrder { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a>

---

##### `IcebergPartitionSpecInput`<sup>Optional</sup> <a name="IcebergPartitionSpecInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergPartitionSpec IcebergPartitionSpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---

##### `IcebergSchemaInput`<sup>Optional</sup> <a name="IcebergSchemaInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchema IcebergSchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---

##### `IcebergSchemaV2Input`<sup>Optional</sup> <a name="IcebergSchemaV2Input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSchemaV2 IcebergSchemaV2Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---

##### `IcebergSortOrderInput`<sup>Optional</sup> <a name="IcebergSortOrderInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadataIcebergSortOrder IcebergSortOrderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---

##### `TablePropertiesInput`<sup>Optional</sup> <a name="TablePropertiesInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TablePropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TableProperties`<sup>Required</sup> <a name="TableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TableProperties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableIcebergMetadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---


### S3TablesTableSnapshotManagementOutputReference <a name="S3TablesTableSnapshotManagementOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableSnapshotManagementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours">ResetMaxSnapshotAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep">ResetMinSnapshotsToKeep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSnapshotAgeHours` <a name="ResetMaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours"></a>

```csharp
private void ResetMaxSnapshotAgeHours()
```

##### `ResetMinSnapshotsToKeep` <a name="ResetMinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep"></a>

```csharp
private void ResetMinSnapshotsToKeep()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput">MaxSnapshotAgeHoursInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput">MinSnapshotsToKeepInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxSnapshotAgeHoursInput`<sup>Optional</sup> <a name="MaxSnapshotAgeHoursInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput"></a>

```csharp
public double MaxSnapshotAgeHoursInput { get; }
```

- *Type:* double

---

##### `MinSnapshotsToKeepInput`<sup>Optional</sup> <a name="MinSnapshotsToKeepInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput"></a>

```csharp
public double MinSnapshotsToKeepInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `MaxSnapshotAgeHours`<sup>Required</sup> <a name="MaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours"></a>

```csharp
public double MaxSnapshotAgeHours { get; }
```

- *Type:* double

---

##### `MinSnapshotsToKeep`<sup>Required</sup> <a name="MinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep"></a>

```csharp
public double MinSnapshotsToKeep { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableSnapshotManagement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---


### S3TablesTableStorageClassConfigurationOutputReference <a name="S3TablesTableStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableStorageClassConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass"></a>

```csharp
private void ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableStorageClassConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---


### S3TablesTableTagsList <a name="S3TablesTableTagsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get"></a>

```csharp
private S3TablesTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>[]

---


### S3TablesTableTagsOutputReference <a name="S3TablesTableTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3TablesTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3TablesTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags">S3TablesTableTags</a>

---



