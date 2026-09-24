# `storagegatewayTape` Submodule <a name="`storagegatewayTape` Submodule" id="@cdktn/provider-awscc.storagegatewayTape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayTape <a name="StoragegatewayTape" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape awscc_storagegateway_tape}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayTape(Construct Scope, string Id, StoragegatewayTapeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig">StoragegatewayTapeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig">StoragegatewayTapeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode">ResetTapeBarcode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm">ResetWorm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags"></a>

```csharp
private void PutTags(IResolvable|StoragegatewayTapeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

---

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted"></a>

```csharp
private void ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey"></a>

```csharp
private void ResetKmsKey()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId"></a>

```csharp
private void ResetPoolId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTapeBarcode` <a name="ResetTapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode"></a>

```csharp
private void ResetTapeBarcode()
```

##### `ResetWorm` <a name="ResetWorm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm"></a>

```csharp
private void ResetWorm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayTape.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayTape.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayTape.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

StoragegatewayTape.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StoragegatewayTape to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StoragegatewayTape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayTape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn">TapeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate">TapeCreatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus">TapeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes">TapeUsedInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput">GatewayArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput">KmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput">TapeBarcodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput">TapeSizeInBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput">WormInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted">KmsEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode">TapeBarcode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes">TapeSizeInBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm">Worm</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags"></a>

```csharp
public StoragegatewayTapeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a>

---

##### `TapeArn`<sup>Required</sup> <a name="TapeArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn"></a>

```csharp
public string TapeArn { get; }
```

- *Type:* string

---

##### `TapeCreatedDate`<sup>Required</sup> <a name="TapeCreatedDate" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate"></a>

```csharp
public string TapeCreatedDate { get; }
```

- *Type:* string

---

##### `TapeStatus`<sup>Required</sup> <a name="TapeStatus" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus"></a>

```csharp
public string TapeStatus { get; }
```

- *Type:* string

---

##### `TapeUsedInBytes`<sup>Required</sup> <a name="TapeUsedInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes"></a>

```csharp
public double TapeUsedInBytes { get; }
```

- *Type:* double

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput"></a>

```csharp
public string GatewayArnInput { get; }
```

- *Type:* string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput"></a>

```csharp
public bool|IResolvable KmsEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput"></a>

```csharp
public string KmsKeyInput { get; }
```

- *Type:* string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput"></a>

```csharp
public IResolvable|StoragegatewayTapeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

---

##### `TapeBarcodeInput`<sup>Optional</sup> <a name="TapeBarcodeInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput"></a>

```csharp
public string TapeBarcodeInput { get; }
```

- *Type:* string

---

##### `TapeSizeInBytesInput`<sup>Optional</sup> <a name="TapeSizeInBytesInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput"></a>

```csharp
public double TapeSizeInBytesInput { get; }
```

- *Type:* double

---

##### `WormInput`<sup>Optional</sup> <a name="WormInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput"></a>

```csharp
public bool|IResolvable WormInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; }
```

- *Type:* string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted"></a>

```csharp
public bool|IResolvable KmsEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `TapeBarcode`<sup>Required</sup> <a name="TapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode"></a>

```csharp
public string TapeBarcode { get; }
```

- *Type:* string

---

##### `TapeSizeInBytes`<sup>Required</sup> <a name="TapeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes"></a>

```csharp
public double TapeSizeInBytes { get; }
```

- *Type:* double

---

##### `Worm`<sup>Required</sup> <a name="Worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm"></a>

```csharp
public bool|IResolvable Worm { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayTapeConfig <a name="StoragegatewayTapeConfig" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayTapeConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayArn,
    double TapeSizeInBytes,
    bool|IResolvable KmsEncrypted = null,
    string KmsKey = null,
    string PoolId = null,
    IResolvable|StoragegatewayTapeTags[] Tags = null,
    string TapeBarcode = null,
    bool|IResolvable Worm = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn">GatewayArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes">TapeSizeInBytes</a></code> | <code>double</code> | The size, in bytes, of the virtual tape that you want to create. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey">KmsKey</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId">PoolId</a></code> | <code>string</code> | The ID of the pool that you want to add your tape to for archiving. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]</code> | A list of up to 50 tags to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode">TapeBarcode</a></code> | <code>string</code> | The barcode that you want to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm">Worm</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to create a write-once-read-many (WORM) virtual tape. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn"></a>

```csharp
public string GatewayArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#gateway_arn StoragegatewayTape#gateway_arn}

---

##### `TapeSizeInBytes`<sup>Required</sup> <a name="TapeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes"></a>

```csharp
public double TapeSizeInBytes { get; set; }
```

- *Type:* double

The size, in bytes, of the virtual tape that you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tape_size_in_bytes StoragegatewayTape#tape_size_in_bytes}

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted"></a>

```csharp
public bool|IResolvable KmsEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#kms_encrypted StoragegatewayTape#kms_encrypted}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey"></a>

```csharp
public string KmsKey { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

This value must be set if KMSEncrypted is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#kms_key StoragegatewayTape#kms_key}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

The ID of the pool that you want to add your tape to for archiving.

Tapes in this pool are archived in the S3 storage class that is associated with the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#pool_id StoragegatewayTape#pool_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags"></a>

```csharp
public IResolvable|StoragegatewayTapeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

A list of up to 50 tags to assign to the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tags StoragegatewayTape#tags}

---

##### `TapeBarcode`<sup>Optional</sup> <a name="TapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode"></a>

```csharp
public string TapeBarcode { get; set; }
```

- *Type:* string

The barcode that you want to assign to the virtual tape.

Barcodes cannot be reused, even after a tape is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#tape_barcode StoragegatewayTape#tape_barcode}

---

##### `Worm`<sup>Optional</sup> <a name="Worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm"></a>

```csharp
public bool|IResolvable Worm { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to create a write-once-read-many (WORM) virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#worm StoragegatewayTape#worm}

---

### StoragegatewayTapeTags <a name="StoragegatewayTapeTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayTapeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key">Key</a></code> | <code>string</code> | The tag key. Cannot be prefixed with aws:. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key. Cannot be prefixed with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#key StoragegatewayTape#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/storagegateway_tape#value StoragegatewayTape#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayTapeTagsList <a name="StoragegatewayTapeTagsList" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayTapeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get"></a>

```csharp
private StoragegatewayTapeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue"></a>

```csharp
public IResolvable|StoragegatewayTapeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>[]

---


### StoragegatewayTapeTagsOutputReference <a name="StoragegatewayTapeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new StoragegatewayTapeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StoragegatewayTapeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags">StoragegatewayTapeTags</a>

---



