# `storagegatewayVolume` Submodule <a name="`storagegatewayVolume` Submodule" id="@cdktn/provider-awscc.storagegatewayVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayVolume <a name="StoragegatewayVolume" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume awscc_storagegateway_volume}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayVolume(Construct Scope, string Id, StoragegatewayVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig">StoragegatewayVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig">StoragegatewayVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn">ResetSourceVolumeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags"></a>

```csharp
private void PutTags(IResolvable|StoragegatewayVolumeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

---

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsEncrypted"></a>

```csharp
private void ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetSourceVolumeArn` <a name="ResetSourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetSourceVolumeArn"></a>

```csharp
private void ResetSourceVolumeArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StoragegatewayVolume resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate">CreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn">TargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn">VolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus">VolumeAttachmentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId">VolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus">VolumeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType">VolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes">VolumeUsedInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput">SourceVolumeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput">TargetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput">VolumeSizeInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted">KmsEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn">SourceVolumeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName">TargetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedDate`<sup>Required</sup> <a name="CreatedDate" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.createdDate"></a>

```csharp
public string CreatedDate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tags"></a>

```csharp
public StoragegatewayVolumeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList">StoragegatewayVolumeTagsList</a>

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetArn"></a>

```csharp
public string TargetArn { get; }
```

- *Type:* string

---

##### `VolumeArn`<sup>Required</sup> <a name="VolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeArn"></a>

```csharp
public string VolumeArn { get; }
```

- *Type:* string

---

##### `VolumeAttachmentStatus`<sup>Required</sup> <a name="VolumeAttachmentStatus" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeAttachmentStatus"></a>

```csharp
public string VolumeAttachmentStatus { get; }
```

- *Type:* string

---

##### `VolumeId`<sup>Required</sup> <a name="VolumeId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeId"></a>

```csharp
public string VolumeId { get; }
```

- *Type:* string

---

##### `VolumeStatus`<sup>Required</sup> <a name="VolumeStatus" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeStatus"></a>

```csharp
public string VolumeStatus { get; }
```

- *Type:* string

---

##### `VolumeType`<sup>Required</sup> <a name="VolumeType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeType"></a>

```csharp
public string VolumeType { get; }
```

- *Type:* string

---

##### `VolumeUsedInBytes`<sup>Required</sup> <a name="VolumeUsedInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeUsedInBytes"></a>

```csharp
public double VolumeUsedInBytes { get; }
```

- *Type:* double

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncryptedInput"></a>

```csharp
public bool|IResolvable KmsEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `SourceVolumeArnInput`<sup>Optional</sup> <a name="SourceVolumeArnInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArnInput"></a>

```csharp
public string SourceVolumeArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tagsInput"></a>

```csharp
public IResolvable|StoragegatewayVolumeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

---

##### `TargetNameInput`<sup>Optional</sup> <a name="TargetNameInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetNameInput"></a>

```csharp
public string TargetNameInput { get; }
```

- *Type:* string

---

##### `VolumeSizeInBytesInput`<sup>Optional</sup> <a name="VolumeSizeInBytesInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytesInput"></a>

```csharp
public double VolumeSizeInBytesInput { get; }
```

- *Type:* double

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsEncrypted"></a>

```csharp
public bool|IResolvable KmsEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `SourceVolumeArn`<sup>Required</sup> <a name="SourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.sourceVolumeArn"></a>

```csharp
public string SourceVolumeArn { get; }
```

- *Type:* string

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.targetName"></a>

```csharp
public string TargetName { get; }
```

- *Type:* string

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.volumeSizeInBytes"></a>

```csharp
public double VolumeSizeInBytes { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayVolumeConfig <a name="StoragegatewayVolumeConfig" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayVolumeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayArn,
    string NetworkInterfaceId,
    string TargetName,
    double VolumeSizeInBytes,
    bool|IResolvable KmsEncrypted = null,
    string KmsKey = null,
    string SnapshotId = null,
    string SourceVolumeArn = null,
    IResolvable|StoragegatewayVolumeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the gateway on which to create the volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName">TargetName</a></code> | <code>string</code> | The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes">VolumeSizeInBytes</a></code> | <code>double</code> | The size of the volume in bytes. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb). |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn">SourceVolumeArn</a></code> | <code>string</code> | The ARN of an existing volume from which to create the new volume. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]</code> | A list of up to 50 tags to assign to the volume. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the gateway on which to create the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#gateway_arn StoragegatewayVolume#gateway_arn}

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#network_interface_id StoragegatewayVolume#network_interface_id}

---

##### `TargetName`<sup>Required</sup> <a name="TargetName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.targetName"></a>

```csharp
public string TargetName { get; set; }
```

- *Type:* string

The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#target_name StoragegatewayVolume#target_name}

---

##### `VolumeSizeInBytes`<sup>Required</sup> <a name="VolumeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.volumeSizeInBytes"></a>

```csharp
public double VolumeSizeInBytes { get; set; }
```

- *Type:* double

The size of the volume in bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#volume_size_in_bytes StoragegatewayVolume#volume_size_in_bytes}

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsEncrypted"></a>

```csharp
public bool|IResolvable KmsEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_encrypted StoragegatewayVolume#kms_encrypted}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#kms_key StoragegatewayVolume#kms_key}

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#snapshot_id StoragegatewayVolume#snapshot_id}

---

##### `SourceVolumeArn`<sup>Optional</sup> <a name="SourceVolumeArn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.sourceVolumeArn"></a>

```csharp
public string SourceVolumeArn { get; set; }
```

- *Type:* string

The ARN of an existing volume from which to create the new volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#source_volume_arn StoragegatewayVolume#source_volume_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeConfig.property.tags"></a>

```csharp
public IResolvable|StoragegatewayVolumeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

A list of up to 50 tags to assign to the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#tags StoragegatewayVolume#tags}

---

### StoragegatewayVolumeTags <a name="StoragegatewayVolumeTags" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayVolumeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#key StoragegatewayVolume#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_volume#value StoragegatewayVolume#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayVolumeTagsList <a name="StoragegatewayVolumeTagsList" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayVolumeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get"></a>

```csharp
private StoragegatewayVolumeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsList.property.internalValue"></a>

```csharp
public IResolvable|StoragegatewayVolumeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>[]

---


### StoragegatewayVolumeTagsOutputReference <a name="StoragegatewayVolumeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayVolumeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StoragegatewayVolumeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayVolume.StoragegatewayVolumeTags">StoragegatewayVolumeTags</a>

---



