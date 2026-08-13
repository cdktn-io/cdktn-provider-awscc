# `fsxDataRepositoryAssociation` Submodule <a name="`fsxDataRepositoryAssociation` Submodule" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxDataRepositoryAssociation <a name="FsxDataRepositoryAssociation" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association awscc_fsx_data_repository_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociation(Construct Scope, string Id, FsxDataRepositoryAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig">FsxDataRepositoryAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig">FsxDataRepositoryAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate">ResetBatchImportMetaDataOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize">ResetImportedFileChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3">ResetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3"></a>

```csharp
private void PutS3(FsxDataRepositoryAssociationS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|FsxDataRepositoryAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]

---

##### `ResetBatchImportMetaDataOnCreate` <a name="ResetBatchImportMetaDataOnCreate" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetBatchImportMetaDataOnCreate"></a>

```csharp
private void ResetBatchImportMetaDataOnCreate()
```

##### `ResetImportedFileChunkSize` <a name="ResetImportedFileChunkSize" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetImportedFileChunkSize"></a>

```csharp
private void ResetImportedFileChunkSize()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetS3"></a>

```csharp
private void ResetS3()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxDataRepositoryAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxDataRepositoryAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxDataRepositoryAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxDataRepositoryAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FsxDataRepositoryAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxDataRepositoryAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxDataRepositoryAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FsxDataRepositoryAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList">FsxDataRepositoryAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput">BatchImportMetaDataOnCreateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput">DataRepositoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput">FileSystemPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput">ImportedFileChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate">BatchImportMetaDataOnCreate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath">DataRepositoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath">FileSystemPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3"></a>

```csharp
public FsxDataRepositoryAssociationS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference">FsxDataRepositoryAssociationS3OutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tags"></a>

```csharp
public FsxDataRepositoryAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList">FsxDataRepositoryAssociationTagsList</a>

---

##### `BatchImportMetaDataOnCreateInput`<sup>Optional</sup> <a name="BatchImportMetaDataOnCreateInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreateInput"></a>

```csharp
public bool|IResolvable BatchImportMetaDataOnCreateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataRepositoryPathInput`<sup>Optional</sup> <a name="DataRepositoryPathInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPathInput"></a>

```csharp
public string DataRepositoryPathInput { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `FileSystemPathInput`<sup>Optional</sup> <a name="FileSystemPathInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPathInput"></a>

```csharp
public string FileSystemPathInput { get; }
```

- *Type:* string

---

##### `ImportedFileChunkSizeInput`<sup>Optional</sup> <a name="ImportedFileChunkSizeInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSizeInput"></a>

```csharp
public double ImportedFileChunkSizeInput { get; }
```

- *Type:* double

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.s3Input"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tagsInput"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]

---

##### `BatchImportMetaDataOnCreate`<sup>Required</sup> <a name="BatchImportMetaDataOnCreate" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.batchImportMetaDataOnCreate"></a>

```csharp
public bool|IResolvable BatchImportMetaDataOnCreate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataRepositoryPath`<sup>Required</sup> <a name="DataRepositoryPath" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.dataRepositoryPath"></a>

```csharp
public string DataRepositoryPath { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.fileSystemPath"></a>

```csharp
public string FileSystemPath { get; }
```

- *Type:* string

---

##### `ImportedFileChunkSize`<sup>Required</sup> <a name="ImportedFileChunkSize" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.importedFileChunkSize"></a>

```csharp
public double ImportedFileChunkSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxDataRepositoryAssociationConfig <a name="FsxDataRepositoryAssociationConfig" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataRepositoryPath,
    string FileSystemId,
    string FileSystemPath,
    bool|IResolvable BatchImportMetaDataOnCreate = null,
    double ImportedFileChunkSize = null,
    FsxDataRepositoryAssociationS3 S3 = null,
    IResolvable|FsxDataRepositoryAssociationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath">DataRepositoryPath</a></code> | <code>string</code> | The path to the Amazon S3 data repository that will be linked to the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | The globally unique ID of the file system, assigned by Amazon FSx. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath">FileSystemPath</a></code> | <code>string</code> | This path specifies where in your file system files will be exported from or imported to. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate">BatchImportMetaDataOnCreate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize">ImportedFileChunkSize</a></code> | <code>double</code> | For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]</code> | A list of Tag values, with a maximum of 50 elements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataRepositoryPath`<sup>Required</sup> <a name="DataRepositoryPath" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.dataRepositoryPath"></a>

```csharp
public string DataRepositoryPath { get; set; }
```

- *Type:* string

The path to the Amazon S3 data repository that will be linked to the file system.

The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/ . This path specifies where in the S3 data repository files will be imported from or exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#data_repository_path FsxDataRepositoryAssociation#data_repository_path}

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

The globally unique ID of the file system, assigned by Amazon FSx.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#file_system_id FsxDataRepositoryAssociation#file_system_id}

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.fileSystemPath"></a>

```csharp
public string FileSystemPath { get; set; }
```

- *Type:* string

This path specifies where in your file system files will be exported from or imported to.

This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#file_system_path FsxDataRepositoryAssociation#file_system_path}

---

##### `BatchImportMetaDataOnCreate`<sup>Optional</sup> <a name="BatchImportMetaDataOnCreate" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.batchImportMetaDataOnCreate"></a>

```csharp
public bool|IResolvable BatchImportMetaDataOnCreate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created.

The task runs if this flag is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#batch_import_meta_data_on_create FsxDataRepositoryAssociation#batch_import_meta_data_on_create}

---

##### `ImportedFileChunkSize`<sup>Optional</sup> <a name="ImportedFileChunkSize" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.importedFileChunkSize"></a>

```csharp
public double ImportedFileChunkSize { get; set; }
```

- *Type:* double

For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk.

The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#imported_file_chunk_size FsxDataRepositoryAssociation#imported_file_chunk_size}

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.s3"></a>

```csharp
public FsxDataRepositoryAssociationS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association.

The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#s3 FsxDataRepositoryAssociation#s3}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationConfig.property.tags"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]

A list of Tag values, with a maximum of 50 elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#tags FsxDataRepositoryAssociation#tags}

---

### FsxDataRepositoryAssociationS3 <a name="FsxDataRepositoryAssociationS3" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationS3 {
    FsxDataRepositoryAssociationS3AutoExportPolicy AutoExportPolicy = null,
    FsxDataRepositoryAssociationS3AutoImportPolicy AutoImportPolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy">AutoExportPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy">AutoImportPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system. |

---

##### `AutoExportPolicy`<sup>Optional</sup> <a name="AutoExportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoExportPolicy"></a>

```csharp
public FsxDataRepositoryAssociationS3AutoExportPolicy AutoExportPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

Specifies the type of updated objects (new, changed, deleted) that will be automatically exported from your file system to the linked S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#auto_export_policy FsxDataRepositoryAssociation#auto_export_policy}

---

##### `AutoImportPolicy`<sup>Optional</sup> <a name="AutoImportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3.property.autoImportPolicy"></a>

```csharp
public FsxDataRepositoryAssociationS3AutoImportPolicy AutoImportPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

Specifies the type of updated objects (new, changed, deleted) that will be automatically imported from the linked S3 bucket to your file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#auto_import_policy FsxDataRepositoryAssociation#auto_import_policy}

---

### FsxDataRepositoryAssociationS3AutoExportPolicy <a name="FsxDataRepositoryAssociationS3AutoExportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationS3AutoExportPolicy {
    string[] Events = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationS3AutoImportPolicy <a name="FsxDataRepositoryAssociationS3AutoImportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationS3AutoImportPolicy {
    string[] Events = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events">Events</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}. |

---

##### `Events`<sup>Optional</sup> <a name="Events" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy.property.events"></a>

```csharp
public string[] Events { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#events FsxDataRepositoryAssociation#events}.

---

### FsxDataRepositoryAssociationTags <a name="FsxDataRepositoryAssociationTags" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#key FsxDataRepositoryAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/fsx_data_repository_association#value FsxDataRepositoryAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.resetEvents"></a>

```csharp
private void ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationS3AutoExportPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---


### FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference <a name="FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents">ResetEvents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvents` <a name="ResetEvents" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.resetEvents"></a>

```csharp
private void ResetEvents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput">EventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events">Events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.eventsInput"></a>

```csharp
public string[] EventsInput { get; }
```

- *Type:* string[]

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.events"></a>

```csharp
public string[] Events { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationS3AutoImportPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---


### FsxDataRepositoryAssociationS3OutputReference <a name="FsxDataRepositoryAssociationS3OutputReference" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy">PutAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy">PutAutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy">ResetAutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy">ResetAutoImportPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoExportPolicy` <a name="PutAutoExportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy"></a>

```csharp
private void PutAutoExportPolicy(FsxDataRepositoryAssociationS3AutoExportPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoExportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `PutAutoImportPolicy` <a name="PutAutoImportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy"></a>

```csharp
private void PutAutoImportPolicy(FsxDataRepositoryAssociationS3AutoImportPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.putAutoImportPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `ResetAutoExportPolicy` <a name="ResetAutoExportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoExportPolicy"></a>

```csharp
private void ResetAutoExportPolicy()
```

##### `ResetAutoImportPolicy` <a name="ResetAutoImportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.resetAutoImportPolicy"></a>

```csharp
private void ResetAutoImportPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy">AutoExportPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy">AutoImportPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput">AutoExportPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput">AutoImportPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoExportPolicy`<sup>Required</sup> <a name="AutoExportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicy"></a>

```csharp
public FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference AutoExportPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoExportPolicyOutputReference</a>

---

##### `AutoImportPolicy`<sup>Required</sup> <a name="AutoImportPolicy" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicy"></a>

```csharp
public FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference AutoImportPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference">FsxDataRepositoryAssociationS3AutoImportPolicyOutputReference</a>

---

##### `AutoExportPolicyInput`<sup>Optional</sup> <a name="AutoExportPolicyInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoExportPolicyInput"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationS3AutoExportPolicy AutoExportPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoExportPolicy">FsxDataRepositoryAssociationS3AutoExportPolicy</a>

---

##### `AutoImportPolicyInput`<sup>Optional</sup> <a name="AutoImportPolicyInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.autoImportPolicyInput"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationS3AutoImportPolicy AutoImportPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3AutoImportPolicy">FsxDataRepositoryAssociationS3AutoImportPolicy</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationS3">FsxDataRepositoryAssociationS3</a>

---


### FsxDataRepositoryAssociationTagsList <a name="FsxDataRepositoryAssociationTagsList" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.get"></a>

```csharp
private FsxDataRepositoryAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>[]

---


### FsxDataRepositoryAssociationTagsOutputReference <a name="FsxDataRepositoryAssociationTagsOutputReference" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxDataRepositoryAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxDataRepositoryAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxDataRepositoryAssociation.FsxDataRepositoryAssociationTags">FsxDataRepositoryAssociationTags</a>

---



