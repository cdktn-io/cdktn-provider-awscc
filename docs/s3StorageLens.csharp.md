# `s3StorageLens` Submodule <a name="`s3StorageLens` Submodule" id="@cdktn/provider-awscc.s3StorageLens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3StorageLens <a name="S3StorageLens" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens awscc_s3_storage_lens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLens(Construct Scope, string Id, S3StorageLensConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig">S3StorageLensConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig">S3StorageLensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration">PutStorageLensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStorageLensConfiguration` <a name="PutStorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration"></a>

```csharp
private void PutStorageLensConfiguration(S3StorageLensStorageLensConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putStorageLensConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags"></a>

```csharp
private void PutTags(IResolvable|S3StorageLensTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3StorageLens.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3StorageLens.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3StorageLens.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3StorageLens.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3StorageLens resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3StorageLens to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3StorageLens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3StorageLens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfiguration">StorageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference">S3StorageLensStorageLensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList">S3StorageLensTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfigurationInput">StorageLensConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageLensConfiguration`<sup>Required</sup> <a name="StorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfiguration"></a>

```csharp
public S3StorageLensStorageLensConfigurationOutputReference StorageLensConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference">S3StorageLensStorageLensConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tags"></a>

```csharp
public S3StorageLensTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList">S3StorageLensTagsList</a>

---

##### `StorageLensConfigurationInput`<sup>Optional</sup> <a name="StorageLensConfigurationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.storageLensConfigurationInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfiguration StorageLensConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tagsInput"></a>

```csharp
public IResolvable|S3StorageLensTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLens.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3StorageLensConfig <a name="S3StorageLensConfig" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    S3StorageLensStorageLensConfiguration StorageLensConfiguration,
    IResolvable|S3StorageLensTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.storageLensConfiguration">StorageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | Specifies the details of Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]</code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StorageLensConfiguration`<sup>Required</sup> <a name="StorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.storageLensConfiguration"></a>

```csharp
public S3StorageLensStorageLensConfiguration StorageLensConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

Specifies the details of Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_lens_configuration S3StorageLens#storage_lens_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensConfig.property.tags"></a>

```csharp
public IResolvable|S3StorageLensTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]

A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#tags S3StorageLens#tags}

---

### S3StorageLensStorageLensConfiguration <a name="S3StorageLensStorageLensConfiguration" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfiguration {
    S3StorageLensStorageLensConfigurationAccountLevel AccountLevel,
    string Id,
    bool|IResolvable IsEnabled,
    S3StorageLensStorageLensConfigurationAwsOrg AwsOrg = null,
    S3StorageLensStorageLensConfigurationDataExport DataExport = null,
    S3StorageLensStorageLensConfigurationExclude Exclude = null,
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport ExpandedPrefixesDataExport = null,
    S3StorageLensStorageLensConfigurationInclude Include = null,
    string PrefixDelimiter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.accountLevel">AccountLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | Account-level metrics configurations. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.id">Id</a></code> | <code>string</code> | The ID that identifies the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.awsOrg">AwsOrg</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.dataExport">DataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | Specifies how Amazon S3 Storage Lens metrics should be exported. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.expandedPrefixesDataExport">ExpandedPrefixesDataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | Expanded Prefixes Data Export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.include">Include</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.prefixDelimiter">PrefixDelimiter</a></code> | <code>string</code> | The delimiter to divide S3 key into hierarchy of prefixes. |

---

##### `AccountLevel`<sup>Required</sup> <a name="AccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.accountLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevel AccountLevel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

Account-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#account_level S3StorageLens#account_level}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID that identifies the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#id S3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `AwsOrg`<sup>Optional</sup> <a name="AwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.awsOrg"></a>

```csharp
public S3StorageLensStorageLensConfigurationAwsOrg AwsOrg { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

The AWS Organizations ARN to use in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#aws_org S3StorageLens#aws_org}

---

##### `DataExport`<sup>Optional</sup> <a name="DataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.dataExport"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExport DataExport { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

Specifies how Amazon S3 Storage Lens metrics should be exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#data_export S3StorageLens#data_export}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.exclude"></a>

```csharp
public S3StorageLensStorageLensConfigurationExclude Exclude { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}

---

##### `ExpandedPrefixesDataExport`<sup>Optional</sup> <a name="ExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.expandedPrefixesDataExport"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport ExpandedPrefixesDataExport { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

Expanded Prefixes Data Export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#expanded_prefixes_data_export S3StorageLens#expanded_prefixes_data_export}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.include"></a>

```csharp
public S3StorageLensStorageLensConfigurationInclude Include { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

S3 buckets and Regions to include/exclude in the Amazon S3 Storage Lens configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#include S3StorageLens#include}

---

##### `PrefixDelimiter`<sup>Optional</sup> <a name="PrefixDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration.property.prefixDelimiter"></a>

```csharp
public string PrefixDelimiter { get; set; }
```

- *Type:* string

The delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#prefix_delimiter S3StorageLens#prefix_delimiter}

---

### S3StorageLensStorageLensConfigurationAccountLevel <a name="S3StorageLensStorageLensConfigurationAccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevel {
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevel BucketLevel,
    S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics ActivityMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics AdvancedCostOptimizationMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics AdvancedDataProtectionMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics AdvancedPerformanceMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics DetailedStatusCodesMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel StorageLensGroupLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.bucketLevel">BucketLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | Bucket-level metrics configurations. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.activityMetrics">ActivityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | Enables activity metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | Enables advanced cost optimization metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedDataProtectionMetrics">AdvancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | Enables advanced data protection metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedPerformanceMetrics">AdvancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | Advanced Performance Metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.detailedStatusCodesMetrics">DetailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | Enables detailed status codes metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.storageLensGroupLevel">StorageLensGroupLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | Specifies the details of Amazon S3 Storage Lens Group configuration. |

---

##### `BucketLevel`<sup>Required</sup> <a name="BucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.bucketLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevel BucketLevel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

Bucket-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#bucket_level S3StorageLens#bucket_level}

---

##### `ActivityMetrics`<sup>Optional</sup> <a name="ActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.activityMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics ActivityMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

##### `AdvancedCostOptimizationMetrics`<sup>Optional</sup> <a name="AdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedCostOptimizationMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics AdvancedCostOptimizationMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

##### `AdvancedDataProtectionMetrics`<sup>Optional</sup> <a name="AdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedDataProtectionMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics AdvancedDataProtectionMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

##### `AdvancedPerformanceMetrics`<sup>Optional</sup> <a name="AdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.advancedPerformanceMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics AdvancedPerformanceMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

##### `DetailedStatusCodesMetrics`<sup>Optional</sup> <a name="DetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.detailedStatusCodesMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics DetailedStatusCodesMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

##### `StorageLensGroupLevel`<sup>Optional</sup> <a name="StorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel.property.storageLensGroupLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel StorageLensGroupLevel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

Specifies the details of Amazon S3 Storage Lens Group configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_lens_group_level S3StorageLens#storage_lens_group_level}

---

### S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether activity metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether advanced cost optimization metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether advanced data protection metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the Advanced Performance Metrics is enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevel {
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics ActivityMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics AdvancedCostOptimizationMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics AdvancedDataProtectionMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics AdvancedPerformanceMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics DetailedStatusCodesMetrics = null,
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel PrefixLevel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics">ActivityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | Enables activity metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | Enables advanced cost optimization metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedDataProtectionMetrics">AdvancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | Enables advanced data protection metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedPerformanceMetrics">AdvancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | Advanced Performance Metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.detailedStatusCodesMetrics">DetailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | Enables detailed status codes metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel">PrefixLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | Prefix-level metrics configurations. |

---

##### `ActivityMetrics`<sup>Optional</sup> <a name="ActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.activityMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics ActivityMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

Enables activity metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#activity_metrics S3StorageLens#activity_metrics}

---

##### `AdvancedCostOptimizationMetrics`<sup>Optional</sup> <a name="AdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedCostOptimizationMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics AdvancedCostOptimizationMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

Enables advanced cost optimization metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#advanced_cost_optimization_metrics S3StorageLens#advanced_cost_optimization_metrics}

---

##### `AdvancedDataProtectionMetrics`<sup>Optional</sup> <a name="AdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedDataProtectionMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics AdvancedDataProtectionMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

Enables advanced data protection metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#advanced_data_protection_metrics S3StorageLens#advanced_data_protection_metrics}

---

##### `AdvancedPerformanceMetrics`<sup>Optional</sup> <a name="AdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.advancedPerformanceMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics AdvancedPerformanceMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

Advanced Performance Metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#advanced_performance_metrics S3StorageLens#advanced_performance_metrics}

---

##### `DetailedStatusCodesMetrics`<sup>Optional</sup> <a name="DetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.detailedStatusCodesMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics DetailedStatusCodesMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

Enables detailed status codes metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#detailed_status_codes_metrics S3StorageLens#detailed_status_codes_metrics}

---

##### `PrefixLevel`<sup>Optional</sup> <a name="PrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel.property.prefixLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel PrefixLevel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

Prefix-level metrics configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#prefix_level S3StorageLens#prefix_level}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether activity metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether activity metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether advanced cost optimization metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether advanced cost optimization metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether advanced data protection metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether advanced data protection metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the Advanced Performance Metrics is enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the Advanced Performance Metrics is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether detailed status codes metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics StorageMetrics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics">StorageMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}. |

---

##### `StorageMetrics`<sup>Optional</sup> <a name="StorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.property.storageMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics StorageMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_metrics S3StorageLens#storage_metrics}.

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
    bool|IResolvable IsEnabled = null,
    S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria SelectionCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether prefix-level storage metrics are enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria">SelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | Selection criteria for prefix-level metrics. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether prefix-level storage metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

##### `SelectionCriteria`<sup>Optional</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.property.selectionCriteria"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria SelectionCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

Selection criteria for prefix-level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#selection_criteria S3StorageLens#selection_criteria}

---

### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
    string Delimiter = null,
    double MaxDepth = null,
    double MinStorageBytesPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter">Delimiter</a></code> | <code>string</code> | Delimiter to divide S3 key into hierarchy of prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth">MaxDepth</a></code> | <code>double</code> | Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage">MinStorageBytesPercentage</a></code> | <code>double</code> | The minimum storage bytes threshold for the prefixes to be included in the analysis. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

Delimiter to divide S3 key into hierarchy of prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#delimiter S3StorageLens#delimiter}

---

##### `MaxDepth`<sup>Optional</sup> <a name="MaxDepth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.maxDepth"></a>

```csharp
public double MaxDepth { get; set; }
```

- *Type:* double

Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#max_depth S3StorageLens#max_depth}

---

##### `MinStorageBytesPercentage`<sup>Optional</sup> <a name="MinStorageBytesPercentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.property.minStorageBytesPercentage"></a>

```csharp
public double MinStorageBytesPercentage { get; set; }
```

- *Type:* double

The minimum storage bytes threshold for the prefixes to be included in the analysis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#min_storage_bytes_percentage S3StorageLens#min_storage_bytes_percentage}

---

### S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics <a name="S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether detailed status codes metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether detailed status codes metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel {
    S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria StorageLensGroupSelectionCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.property.storageLensGroupSelectionCriteria">StorageLensGroupSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | Selection criteria for Storage Lens Group level metrics. |

---

##### `StorageLensGroupSelectionCriteria`<sup>Optional</sup> <a name="StorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.property.storageLensGroupSelectionCriteria"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria StorageLensGroupSelectionCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

Selection criteria for Storage Lens Group level metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_lens_group_selection_criteria S3StorageLens#storage_lens_group_selection_criteria}

---

### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria {
    string[] Exclude = null,
    string[] Include = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.exclude">Exclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.include">Include</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#include S3StorageLens#include}. |

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.exclude"></a>

```csharp
public string[] Exclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#exclude S3StorageLens#exclude}.

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.property.include"></a>

```csharp
public string[] Include { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#include S3StorageLens#include}.

---

### S3StorageLensStorageLensConfigurationAwsOrg <a name="S3StorageLensStorageLensConfigurationAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAwsOrg {
    string Arn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.property.arn">Arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the specified resource. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

### S3StorageLensStorageLensConfigurationDataExport <a name="S3StorageLensStorageLensConfigurationDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExport {
    S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics CloudwatchMetrics = null,
    S3StorageLensStorageLensConfigurationDataExportS3BucketDestination S3BucketDestination = null,
    S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination StorageLensTableDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.cloudwatchMetrics">CloudwatchMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.s3BucketDestination">S3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | S3 bucket destination settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.storageLensTableDestination">StorageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | S3 Tables destination settings for the Amazon S3 Storage Lens metrics export. |

---

##### `CloudwatchMetrics`<sup>Optional</sup> <a name="CloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.cloudwatchMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics CloudwatchMetrics { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

CloudWatch metrics settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#cloudwatch_metrics S3StorageLens#cloudwatch_metrics}

---

##### `S3BucketDestination`<sup>Optional</sup> <a name="S3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.s3BucketDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestination S3BucketDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

##### `StorageLensTableDestination`<sup>Optional</sup> <a name="StorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport.property.storageLensTableDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination StorageLensTableDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

### S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics <a name="S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics {
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether CloudWatch metrics are enabled or disabled. |

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether CloudWatch metrics are enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestination <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestination {
    string AccountId = null,
    string Arn = null,
    S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption Encryption = null,
    string Format = null,
    string OutputSchemaVersion = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.accountId">AccountId</a></code> | <code>string</code> | The AWS account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.arn">Arn</a></code> | <code>string</code> | The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.format">Format</a></code> | <code>string</code> | Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion">OutputSchemaVersion</a></code> | <code>string</code> | The version of the output schema to use when exporting Amazon S3 Storage Lens metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.prefix">Prefix</a></code> | <code>string</code> | The prefix to use for Amazon S3 Storage Lens export. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

##### `OutputSchemaVersion`<sup>Optional</sup> <a name="OutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.outputSchemaVersion"></a>

```csharp
public string OutputSchemaVersion { get; set; }
```

- *Type:* string

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption {
    S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms Ssekms = null,
    string Sses3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3">Sses3</a></code> | <code>string</code> | S3 default server-side encryption. |

---

##### `Ssekms`<sup>Optional</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms Ssekms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `Sses3`<sup>Optional</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.property.sses3"></a>

```csharp
public string Sses3 { get; set; }
```

- *Type:* string

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {
    string KeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId">KeyId</a></code> | <code>string</code> | The ARN of the KMS key to use for encryption. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination {
    S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption Encryption = null,
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the export to S3 Tables is enabled or disabled. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption {
    S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms Ssekms = null,
    string Sses3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.sses3">Sses3</a></code> | <code>string</code> | S3 default server-side encryption. |

---

##### `Ssekms`<sup>Optional</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms Ssekms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `Sses3`<sup>Optional</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.property.sses3"></a>

```csharp
public string Sses3 { get; set; }
```

- *Type:* string

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms {
    string KeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId">KeyId</a></code> | <code>string</code> | The ARN of the KMS key to use for encryption. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationExclude <a name="S3StorageLensStorageLensConfigurationExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExclude {
    string[] Buckets = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.buckets">Buckets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}. |

---

##### `Buckets`<sup>Optional</sup> <a name="Buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.buckets"></a>

```csharp
public string[] Buckets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport {
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination S3BucketDestination = null,
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination StorageLensTableDestination = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.s3BucketDestination">S3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | S3 bucket destination settings for the Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.storageLensTableDestination">StorageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | S3 Tables destination settings for the Amazon S3 Storage Lens metrics export. |

---

##### `S3BucketDestination`<sup>Optional</sup> <a name="S3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.s3BucketDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination S3BucketDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

S3 bucket destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#s3_bucket_destination S3StorageLens#s3_bucket_destination}

---

##### `StorageLensTableDestination`<sup>Optional</sup> <a name="StorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.property.storageLensTableDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination StorageLensTableDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

S3 Tables destination settings for the Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#storage_lens_table_destination S3StorageLens#storage_lens_table_destination}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination {
    string AccountId = null,
    string Arn = null,
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption Encryption = null,
    string Format = null,
    string OutputSchemaVersion = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.accountId">AccountId</a></code> | <code>string</code> | The AWS account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.arn">Arn</a></code> | <code>string</code> | The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.format">Format</a></code> | <code>string</code> | Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.outputSchemaVersion">OutputSchemaVersion</a></code> | <code>string</code> | The version of the output schema to use when exporting Amazon S3 Storage Lens metrics. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.prefix">Prefix</a></code> | <code>string</code> | The prefix to use for Amazon S3 Storage Lens export. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The AWS account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#account_id S3StorageLens#account_id}

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#arn S3StorageLens#arn}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#format S3StorageLens#format}

---

##### `OutputSchemaVersion`<sup>Optional</sup> <a name="OutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.outputSchemaVersion"></a>

```csharp
public string OutputSchemaVersion { get; set; }
```

- *Type:* string

The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#output_schema_version S3StorageLens#output_schema_version}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The prefix to use for Amazon S3 Storage Lens export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#prefix S3StorageLens#prefix}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption {
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms Ssekms = null,
    string Sses3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.sses3">Sses3</a></code> | <code>string</code> | S3 default server-side encryption. |

---

##### `Ssekms`<sup>Optional</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms Ssekms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `Sses3`<sup>Optional</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.property.sses3"></a>

```csharp
public string Sses3 { get; set; }
```

- *Type:* string

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms {
    string KeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.property.keyId">KeyId</a></code> | <code>string</code> | The ARN of the KMS key to use for encryption. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination {
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption Encryption = null,
    bool|IResolvable IsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether the export to S3 Tables is enabled or disabled. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

Configures the server-side encryption for Amazon S3 Storage Lens report files with either S3-managed keys (SSE-S3) or KMS-managed keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#encryption S3StorageLens#encryption}

---

##### `IsEnabled`<sup>Optional</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether the export to S3 Tables is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#is_enabled S3StorageLens#is_enabled}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption {
    S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms Ssekms = null,
    string Sses3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | AWS KMS server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.sses3">Sses3</a></code> | <code>string</code> | S3 default server-side encryption. |

---

##### `Ssekms`<sup>Optional</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms Ssekms { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

AWS KMS server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#ssekms S3StorageLens#ssekms}

---

##### `Sses3`<sup>Optional</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.property.sses3"></a>

```csharp
public string Sses3 { get; set; }
```

- *Type:* string

S3 default server-side encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#sses3 S3StorageLens#sses3}

---

### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms {
    string KeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId">KeyId</a></code> | <code>string</code> | The ARN of the KMS key to use for encryption. |

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

The ARN of the KMS key to use for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#key_id S3StorageLens#key_id}

---

### S3StorageLensStorageLensConfigurationInclude <a name="S3StorageLensStorageLensConfigurationInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationInclude {
    string[] Buckets = null,
    string[] Regions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.buckets">Buckets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}. |

---

##### `Buckets`<sup>Optional</sup> <a name="Buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.buckets"></a>

```csharp
public string[] Buckets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#buckets S3StorageLens#buckets}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#regions S3StorageLens#regions}.

---

### S3StorageLensTags <a name="S3StorageLensTags" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#key S3StorageLens#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#value S3StorageLens#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#key S3StorageLens#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3_storage_lens#value S3StorageLens#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics">PutActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics">PutAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics">PutAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics">PutAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics">PutDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel">PutPrefixLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetActivityMetrics">ResetActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedCostOptimizationMetrics">ResetAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedDataProtectionMetrics">ResetAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedPerformanceMetrics">ResetAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetDetailedStatusCodesMetrics">ResetDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetPrefixLevel">ResetPrefixLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActivityMetrics` <a name="PutActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics"></a>

```csharp
private void PutActivityMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putActivityMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---

##### `PutAdvancedCostOptimizationMetrics` <a name="PutAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics"></a>

```csharp
private void PutAdvancedCostOptimizationMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedCostOptimizationMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---

##### `PutAdvancedDataProtectionMetrics` <a name="PutAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics"></a>

```csharp
private void PutAdvancedDataProtectionMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedDataProtectionMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---

##### `PutAdvancedPerformanceMetrics` <a name="PutAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics"></a>

```csharp
private void PutAdvancedPerformanceMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putAdvancedPerformanceMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---

##### `PutDetailedStatusCodesMetrics` <a name="PutDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics"></a>

```csharp
private void PutDetailedStatusCodesMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putDetailedStatusCodesMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---

##### `PutPrefixLevel` <a name="PutPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel"></a>

```csharp
private void PutPrefixLevel(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.putPrefixLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---

##### `ResetActivityMetrics` <a name="ResetActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetActivityMetrics"></a>

```csharp
private void ResetActivityMetrics()
```

##### `ResetAdvancedCostOptimizationMetrics` <a name="ResetAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedCostOptimizationMetrics"></a>

```csharp
private void ResetAdvancedCostOptimizationMetrics()
```

##### `ResetAdvancedDataProtectionMetrics` <a name="ResetAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedDataProtectionMetrics"></a>

```csharp
private void ResetAdvancedDataProtectionMetrics()
```

##### `ResetAdvancedPerformanceMetrics` <a name="ResetAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetAdvancedPerformanceMetrics"></a>

```csharp
private void ResetAdvancedPerformanceMetrics()
```

##### `ResetDetailedStatusCodesMetrics` <a name="ResetDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetDetailedStatusCodesMetrics"></a>

```csharp
private void ResetDetailedStatusCodesMetrics()
```

##### `ResetPrefixLevel` <a name="ResetPrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resetPrefixLevel"></a>

```csharp
private void ResetPrefixLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics">ActivityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics">AdvancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics">AdvancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics">DetailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel">PrefixLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetricsInput">ActivityMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetricsInput">AdvancedCostOptimizationMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetricsInput">AdvancedDataProtectionMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetricsInput">AdvancedPerformanceMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetricsInput">DetailedStatusCodesMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevelInput">PrefixLevelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivityMetrics`<sup>Required</sup> <a name="ActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference ActivityMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a>

---

##### `AdvancedCostOptimizationMetrics`<sup>Required</sup> <a name="AdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference AdvancedCostOptimizationMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `AdvancedDataProtectionMetrics`<sup>Required</sup> <a name="AdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference AdvancedDataProtectionMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `AdvancedPerformanceMetrics`<sup>Required</sup> <a name="AdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference AdvancedPerformanceMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `DetailedStatusCodesMetrics`<sup>Required</sup> <a name="DetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference DetailedStatusCodesMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `PrefixLevel`<sup>Required</sup> <a name="PrefixLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference PrefixLevel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a>

---

##### `ActivityMetricsInput`<sup>Optional</sup> <a name="ActivityMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics ActivityMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---

##### `AdvancedCostOptimizationMetricsInput`<sup>Optional</sup> <a name="AdvancedCostOptimizationMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics AdvancedCostOptimizationMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---

##### `AdvancedDataProtectionMetricsInput`<sup>Optional</sup> <a name="AdvancedDataProtectionMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics AdvancedDataProtectionMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---

##### `AdvancedPerformanceMetricsInput`<sup>Optional</sup> <a name="AdvancedPerformanceMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics AdvancedPerformanceMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---

##### `DetailedStatusCodesMetricsInput`<sup>Optional</sup> <a name="DetailedStatusCodesMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics DetailedStatusCodesMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---

##### `PrefixLevelInput`<sup>Optional</sup> <a name="PrefixLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevelInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel PrefixLevelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics">PutStorageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resetStorageMetrics">ResetStorageMetrics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageMetrics` <a name="PutStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics"></a>

```csharp
private void PutStorageMetrics(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.putStorageMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---

##### `ResetStorageMetrics` <a name="ResetStorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resetStorageMetrics"></a>

```csharp
private void ResetStorageMetrics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics">StorageMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetricsInput">StorageMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageMetrics`<sup>Required</sup> <a name="StorageMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference StorageMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a>

---

##### `StorageMetricsInput`<sup>Optional</sup> <a name="StorageMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics StorageMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria">PutSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetSelectionCriteria">ResetSelectionCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelectionCriteria` <a name="PutSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria"></a>

```csharp
private void PutSelectionCriteria(S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.putSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```

##### `ResetSelectionCriteria` <a name="ResetSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resetSelectionCriteria"></a>

```csharp
private void ResetSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria">SelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteriaInput">SelectionCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SelectionCriteria`<sup>Required</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference SelectionCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SelectionCriteriaInput`<sup>Optional</sup> <a name="SelectionCriteriaInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteriaInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria SelectionCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMaxDepth">ResetMaxDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMinStorageBytesPercentage">ResetMinStorageBytesPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetMaxDepth` <a name="ResetMaxDepth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMaxDepth"></a>

```csharp
private void ResetMaxDepth()
```

##### `ResetMinStorageBytesPercentage` <a name="ResetMinStorageBytesPercentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resetMinStorageBytesPercentage"></a>

```csharp
private void ResetMinStorageBytesPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepthInput">MaxDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentageInput">MinStorageBytesPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth">MaxDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage">MinStorageBytesPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `MaxDepthInput`<sup>Optional</sup> <a name="MaxDepthInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepthInput"></a>

```csharp
public double MaxDepthInput { get; }
```

- *Type:* double

---

##### `MinStorageBytesPercentageInput`<sup>Optional</sup> <a name="MinStorageBytesPercentageInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentageInput"></a>

```csharp
public double MinStorageBytesPercentageInput { get; }
```

- *Type:* double

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `MaxDepth`<sup>Required</sup> <a name="MaxDepth" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth"></a>

```csharp
public double MaxDepth { get; }
```

- *Type:* double

---

##### `MinStorageBytesPercentage`<sup>Required</sup> <a name="MinStorageBytesPercentage" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage"></a>

```csharp
public double MinStorageBytesPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics">PutActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics">PutAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics">PutAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics">PutAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel">PutBucketLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics">PutDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel">PutStorageLensGroupLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetActivityMetrics">ResetActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedCostOptimizationMetrics">ResetAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedDataProtectionMetrics">ResetAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedPerformanceMetrics">ResetAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetDetailedStatusCodesMetrics">ResetDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetStorageLensGroupLevel">ResetStorageLensGroupLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActivityMetrics` <a name="PutActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics"></a>

```csharp
private void PutActivityMetrics(S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putActivityMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---

##### `PutAdvancedCostOptimizationMetrics` <a name="PutAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics"></a>

```csharp
private void PutAdvancedCostOptimizationMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedCostOptimizationMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---

##### `PutAdvancedDataProtectionMetrics` <a name="PutAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics"></a>

```csharp
private void PutAdvancedDataProtectionMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedDataProtectionMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---

##### `PutAdvancedPerformanceMetrics` <a name="PutAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics"></a>

```csharp
private void PutAdvancedPerformanceMetrics(S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putAdvancedPerformanceMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---

##### `PutBucketLevel` <a name="PutBucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel"></a>

```csharp
private void PutBucketLevel(S3StorageLensStorageLensConfigurationAccountLevelBucketLevel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putBucketLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---

##### `PutDetailedStatusCodesMetrics` <a name="PutDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics"></a>

```csharp
private void PutDetailedStatusCodesMetrics(S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putDetailedStatusCodesMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---

##### `PutStorageLensGroupLevel` <a name="PutStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel"></a>

```csharp
private void PutStorageLensGroupLevel(S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.putStorageLensGroupLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---

##### `ResetActivityMetrics` <a name="ResetActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetActivityMetrics"></a>

```csharp
private void ResetActivityMetrics()
```

##### `ResetAdvancedCostOptimizationMetrics` <a name="ResetAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedCostOptimizationMetrics"></a>

```csharp
private void ResetAdvancedCostOptimizationMetrics()
```

##### `ResetAdvancedDataProtectionMetrics` <a name="ResetAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedDataProtectionMetrics"></a>

```csharp
private void ResetAdvancedDataProtectionMetrics()
```

##### `ResetAdvancedPerformanceMetrics` <a name="ResetAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetAdvancedPerformanceMetrics"></a>

```csharp
private void ResetAdvancedPerformanceMetrics()
```

##### `ResetDetailedStatusCodesMetrics` <a name="ResetDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetDetailedStatusCodesMetrics"></a>

```csharp
private void ResetDetailedStatusCodesMetrics()
```

##### `ResetStorageLensGroupLevel` <a name="ResetStorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.resetStorageLensGroupLevel"></a>

```csharp
private void ResetStorageLensGroupLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics">ActivityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics">AdvancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics">AdvancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel">BucketLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics">DetailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel">StorageLensGroupLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetricsInput">ActivityMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetricsInput">AdvancedCostOptimizationMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetricsInput">AdvancedDataProtectionMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetricsInput">AdvancedPerformanceMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevelInput">BucketLevelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetricsInput">DetailedStatusCodesMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevelInput">StorageLensGroupLevelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivityMetrics`<sup>Required</sup> <a name="ActivityMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference ActivityMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a>

---

##### `AdvancedCostOptimizationMetrics`<sup>Required</sup> <a name="AdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference AdvancedCostOptimizationMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `AdvancedDataProtectionMetrics`<sup>Required</sup> <a name="AdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference AdvancedDataProtectionMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `AdvancedPerformanceMetrics`<sup>Required</sup> <a name="AdvancedPerformanceMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference AdvancedPerformanceMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `BucketLevel`<sup>Required</sup> <a name="BucketLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference BucketLevel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a>

---

##### `DetailedStatusCodesMetrics`<sup>Required</sup> <a name="DetailedStatusCodesMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference DetailedStatusCodesMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `StorageLensGroupLevel`<sup>Required</sup> <a name="StorageLensGroupLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference StorageLensGroupLevel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a>

---

##### `ActivityMetricsInput`<sup>Optional</sup> <a name="ActivityMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics ActivityMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">S3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---

##### `AdvancedCostOptimizationMetricsInput`<sup>Optional</sup> <a name="AdvancedCostOptimizationMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics AdvancedCostOptimizationMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---

##### `AdvancedDataProtectionMetricsInput`<sup>Optional</sup> <a name="AdvancedDataProtectionMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics AdvancedDataProtectionMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---

##### `AdvancedPerformanceMetricsInput`<sup>Optional</sup> <a name="AdvancedPerformanceMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics AdvancedPerformanceMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">S3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---

##### `BucketLevelInput`<sup>Optional</sup> <a name="BucketLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevelInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelBucketLevel BucketLevelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelBucketLevel">S3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---

##### `DetailedStatusCodesMetricsInput`<sup>Optional</sup> <a name="DetailedStatusCodesMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics DetailedStatusCodesMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">S3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---

##### `StorageLensGroupLevelInput`<sup>Optional</sup> <a name="StorageLensGroupLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevelInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel StorageLensGroupLevelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria">PutStorageLensGroupSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resetStorageLensGroupSelectionCriteria">ResetStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageLensGroupSelectionCriteria` <a name="PutStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria"></a>

```csharp
private void PutStorageLensGroupSelectionCriteria(S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.putStorageLensGroupSelectionCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---

##### `ResetStorageLensGroupSelectionCriteria` <a name="ResetStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resetStorageLensGroupSelectionCriteria"></a>

```csharp
private void ResetStorageLensGroupSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria">StorageLensGroupSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteriaInput">StorageLensGroupSelectionCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageLensGroupSelectionCriteria`<sup>Required</sup> <a name="StorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference StorageLensGroupSelectionCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a>

---

##### `StorageLensGroupSelectionCriteriaInput`<sup>Optional</sup> <a name="StorageLensGroupSelectionCriteriaInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteriaInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria StorageLensGroupSelectionCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---


### S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference <a name="S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.includeInput">IncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude">Exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.excludeInput"></a>

```csharp
public string[] ExcludeInput { get; }
```

- *Type:* string[]

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.includeInput"></a>

```csharp
public string[] IncludeInput { get; }
```

- *Type:* string[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude"></a>

```csharp
public string[] Exclude { get; }
```

- *Type:* string[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">S3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---


### S3StorageLensStorageLensConfigurationAwsOrgOutputReference <a name="S3StorageLensStorageLensConfigurationAwsOrgOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationAwsOrgOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAwsOrg InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---


### S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---


### S3StorageLensStorageLensConfigurationDataExportOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics">PutCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination">PutS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination">PutStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetCloudwatchMetrics">ResetCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetS3BucketDestination">ResetS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetStorageLensTableDestination">ResetStorageLensTableDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchMetrics` <a name="PutCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics"></a>

```csharp
private void PutCloudwatchMetrics(S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putCloudwatchMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---

##### `PutS3BucketDestination` <a name="PutS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination"></a>

```csharp
private void PutS3BucketDestination(S3StorageLensStorageLensConfigurationDataExportS3BucketDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putS3BucketDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---

##### `PutStorageLensTableDestination` <a name="PutStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination"></a>

```csharp
private void PutStorageLensTableDestination(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.putStorageLensTableDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---

##### `ResetCloudwatchMetrics` <a name="ResetCloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetCloudwatchMetrics"></a>

```csharp
private void ResetCloudwatchMetrics()
```

##### `ResetS3BucketDestination` <a name="ResetS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetS3BucketDestination"></a>

```csharp
private void ResetS3BucketDestination()
```

##### `ResetStorageLensTableDestination` <a name="ResetStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.resetStorageLensTableDestination"></a>

```csharp
private void ResetStorageLensTableDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics">CloudwatchMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination">S3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination">StorageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetricsInput">CloudwatchMetricsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestinationInput">S3BucketDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestinationInput">StorageLensTableDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchMetrics`<sup>Required</sup> <a name="CloudwatchMetrics" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference CloudwatchMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a>

---

##### `S3BucketDestination`<sup>Required</sup> <a name="S3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference S3BucketDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a>

---

##### `StorageLensTableDestination`<sup>Required</sup> <a name="StorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference StorageLensTableDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a>

---

##### `CloudwatchMetricsInput`<sup>Optional</sup> <a name="CloudwatchMetricsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetricsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics CloudwatchMetricsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">S3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---

##### `S3BucketDestinationInput`<sup>Optional</sup> <a name="S3BucketDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestinationInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestination S3BucketDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---

##### `StorageLensTableDestinationInput`<sup>Optional</sup> <a name="StorageLensTableDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestinationInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination StorageLensTableDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExport InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms">PutSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms">ResetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSses3">ResetSses3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsekms` <a name="PutSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms"></a>

```csharp
private void PutSsekms(S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `ResetSsekms` <a name="ResetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms"></a>

```csharp
private void ResetSsekms()
```

##### `ResetSses3` <a name="ResetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resetSses3"></a>

```csharp
private void ResetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput">SsekmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input">Sses3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference Ssekms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `SsekmsInput`<sup>Optional</sup> <a name="SsekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms SsekmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `Sses3Input`<sup>Optional</sup> <a name="Sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input"></a>

```csharp
public string Sses3Input { get; }
```

- *Type:* string

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```csharp
public string Sses3 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion">ResetOutputSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetOutputSchemaVersion` <a name="ResetOutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion"></a>

```csharp
private void ResetOutputSchemaVersion()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput">OutputSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">OutputSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `OutputSchemaVersionInput`<sup>Optional</sup> <a name="OutputSchemaVersionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput"></a>

```csharp
public string OutputSchemaVersionInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `OutputSchemaVersion`<sup>Required</sup> <a name="OutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```csharp
public string OutputSchemaVersion { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportS3BucketDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms">PutSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms">ResetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3">ResetSses3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsekms` <a name="PutSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms"></a>

```csharp
private void PutSsekms(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `ResetSsekms` <a name="ResetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms"></a>

```csharp
private void ResetSsekms()
```

##### `ResetSses3` <a name="ResetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3"></a>

```csharp
private void ResetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput">SsekmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input">Sses3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference Ssekms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `SsekmsInput`<sup>Optional</sup> <a name="SsekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms SsekmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `Sses3Input`<sup>Optional</sup> <a name="Sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input"></a>

```csharp
public string Sses3Input { get; }
```

- *Type:* string

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```csharp
public string Sses3 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---


### S3StorageLensStorageLensConfigurationExcludeOutputReference <a name="S3StorageLensStorageLensConfigurationExcludeOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetBuckets">ResetBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuckets` <a name="ResetBuckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetBuckets"></a>

```csharp
private void ResetBuckets()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.bucketsInput">BucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets">Buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketsInput`<sup>Optional</sup> <a name="BucketsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.bucketsInput"></a>

```csharp
public string[] BucketsInput { get; }
```

- *Type:* string[]

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets"></a>

```csharp
public string[] Buckets { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination">PutS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination">PutStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetS3BucketDestination">ResetS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetStorageLensTableDestination">ResetStorageLensTableDestination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3BucketDestination` <a name="PutS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination"></a>

```csharp
private void PutS3BucketDestination(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putS3BucketDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---

##### `PutStorageLensTableDestination` <a name="PutStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination"></a>

```csharp
private void PutStorageLensTableDestination(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.putStorageLensTableDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---

##### `ResetS3BucketDestination` <a name="ResetS3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetS3BucketDestination"></a>

```csharp
private void ResetS3BucketDestination()
```

##### `ResetStorageLensTableDestination` <a name="ResetStorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resetStorageLensTableDestination"></a>

```csharp
private void ResetStorageLensTableDestination()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination">S3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination">StorageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestinationInput">S3BucketDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestinationInput">StorageLensTableDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3BucketDestination`<sup>Required</sup> <a name="S3BucketDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference S3BucketDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a>

---

##### `StorageLensTableDestination`<sup>Required</sup> <a name="StorageLensTableDestination" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference StorageLensTableDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a>

---

##### `S3BucketDestinationInput`<sup>Optional</sup> <a name="S3BucketDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestinationInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination S3BucketDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---

##### `StorageLensTableDestinationInput`<sup>Optional</sup> <a name="StorageLensTableDestinationInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestinationInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination StorageLensTableDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms">PutSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms">ResetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSses3">ResetSses3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsekms` <a name="PutSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms"></a>

```csharp
private void PutSsekms(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `ResetSsekms` <a name="ResetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSsekms"></a>

```csharp
private void ResetSsekms()
```

##### `ResetSses3` <a name="ResetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resetSses3"></a>

```csharp
private void ResetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput">SsekmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input">Sses3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference Ssekms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `SsekmsInput`<sup>Optional</sup> <a name="SsekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms SsekmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---

##### `Sses3Input`<sup>Optional</sup> <a name="Sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3Input"></a>

```csharp
public string Sses3Input { get; }
```

- *Type:* string

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```csharp
public string Sses3 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion">ResetOutputSchemaVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetOutputSchemaVersion` <a name="ResetOutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetOutputSchemaVersion"></a>

```csharp
private void ResetOutputSchemaVersion()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput">OutputSchemaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">OutputSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `OutputSchemaVersionInput`<sup>Optional</sup> <a name="OutputSchemaVersionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersionInput"></a>

```csharp
public string OutputSchemaVersionInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `OutputSchemaVersion`<sup>Required</sup> <a name="OutputSchemaVersion" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```csharp
public string OutputSchemaVersion { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms">PutSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms">ResetSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3">ResetSses3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSsekms` <a name="PutSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms"></a>

```csharp
private void PutSsekms(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.putSsekms.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `ResetSsekms` <a name="ResetSsekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSsekms"></a>

```csharp
private void ResetSsekms()
```

##### `ResetSses3` <a name="ResetSses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resetSses3"></a>

```csharp
private void ResetSses3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput">SsekmsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input">Sses3Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference Ssekms { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `SsekmsInput`<sup>Optional</sup> <a name="SsekmsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekmsInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms SsekmsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---

##### `Sses3Input`<sup>Optional</sup> <a name="Sses3Input" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3Input"></a>

```csharp
public string Sses3Input { get; }
```

- *Type:* string

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```csharp
public string Sses3 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resetKeyId"></a>

```csharp
private void ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference <a name="S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetIsEnabled">ResetIsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetIsEnabled` <a name="ResetIsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resetIsEnabled"></a>

```csharp
private void ResetIsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---


### S3StorageLensStorageLensConfigurationIncludeOutputReference <a name="S3StorageLensStorageLensConfigurationIncludeOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetBuckets">ResetBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuckets` <a name="ResetBuckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetBuckets"></a>

```csharp
private void ResetBuckets()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.bucketsInput">BucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets">Buckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketsInput`<sup>Optional</sup> <a name="BucketsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.bucketsInput"></a>

```csharp
public string[] BucketsInput { get; }
```

- *Type:* string[]

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets"></a>

```csharp
public string[] Buckets { get; }
```

- *Type:* string[]

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationInclude InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---


### S3StorageLensStorageLensConfigurationOutputReference <a name="S3StorageLensStorageLensConfigurationOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensStorageLensConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel">PutAccountLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg">PutAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport">PutDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport">PutExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetAwsOrg">ResetAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetDataExport">ResetDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExpandedPrefixesDataExport">ResetExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetPrefixDelimiter">ResetPrefixDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccountLevel` <a name="PutAccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel"></a>

```csharp
private void PutAccountLevel(S3StorageLensStorageLensConfigurationAccountLevel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAccountLevel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---

##### `PutAwsOrg` <a name="PutAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg"></a>

```csharp
private void PutAwsOrg(S3StorageLensStorageLensConfigurationAwsOrg Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putAwsOrg.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---

##### `PutDataExport` <a name="PutDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport"></a>

```csharp
private void PutDataExport(S3StorageLensStorageLensConfigurationDataExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putDataExport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---

##### `PutExclude` <a name="PutExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude"></a>

```csharp
private void PutExclude(S3StorageLensStorageLensConfigurationExclude Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExclude.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---

##### `PutExpandedPrefixesDataExport` <a name="PutExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport"></a>

```csharp
private void PutExpandedPrefixesDataExport(S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putExpandedPrefixesDataExport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---

##### `PutInclude` <a name="PutInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude"></a>

```csharp
private void PutInclude(S3StorageLensStorageLensConfigurationInclude Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.putInclude.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---

##### `ResetAwsOrg` <a name="ResetAwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetAwsOrg"></a>

```csharp
private void ResetAwsOrg()
```

##### `ResetDataExport` <a name="ResetDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetDataExport"></a>

```csharp
private void ResetDataExport()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetExpandedPrefixesDataExport` <a name="ResetExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetExpandedPrefixesDataExport"></a>

```csharp
private void ResetExpandedPrefixesDataExport()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetInclude"></a>

```csharp
private void ResetInclude()
```

##### `ResetPrefixDelimiter` <a name="ResetPrefixDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.resetPrefixDelimiter"></a>

```csharp
private void ResetPrefixDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevel">AccountLevel</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrg">AwsOrg</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference">S3StorageLensStorageLensConfigurationAwsOrgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExport">DataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference">S3StorageLensStorageLensConfigurationDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference">S3StorageLensStorageLensConfigurationExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport">ExpandedPrefixesDataExport</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.include">Include</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference">S3StorageLensStorageLensConfigurationIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn">StorageLensArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevelInput">AccountLevelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrgInput">AwsOrgInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExportInput">DataExportInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExportInput">ExpandedPrefixesDataExportInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.includeInput">IncludeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiterInput">PrefixDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabled">IsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter">PrefixDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountLevel`<sup>Required</sup> <a name="AccountLevel" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevel"></a>

```csharp
public S3StorageLensStorageLensConfigurationAccountLevelOutputReference AccountLevel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevelOutputReference">S3StorageLensStorageLensConfigurationAccountLevelOutputReference</a>

---

##### `AwsOrg`<sup>Required</sup> <a name="AwsOrg" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrg"></a>

```csharp
public S3StorageLensStorageLensConfigurationAwsOrgOutputReference AwsOrg { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrgOutputReference">S3StorageLensStorageLensConfigurationAwsOrgOutputReference</a>

---

##### `DataExport`<sup>Required</sup> <a name="DataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExport"></a>

```csharp
public S3StorageLensStorageLensConfigurationDataExportOutputReference DataExport { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExportOutputReference">S3StorageLensStorageLensConfigurationDataExportOutputReference</a>

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.exclude"></a>

```csharp
public S3StorageLensStorageLensConfigurationExcludeOutputReference Exclude { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExcludeOutputReference">S3StorageLensStorageLensConfigurationExcludeOutputReference</a>

---

##### `ExpandedPrefixesDataExport`<sup>Required</sup> <a name="ExpandedPrefixesDataExport" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport"></a>

```csharp
public S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference ExpandedPrefixesDataExport { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.include"></a>

```csharp
public S3StorageLensStorageLensConfigurationIncludeOutputReference Include { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationIncludeOutputReference">S3StorageLensStorageLensConfigurationIncludeOutputReference</a>

---

##### `StorageLensArn`<sup>Required</sup> <a name="StorageLensArn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn"></a>

```csharp
public string StorageLensArn { get; }
```

- *Type:* string

---

##### `AccountLevelInput`<sup>Optional</sup> <a name="AccountLevelInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.accountLevelInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAccountLevel AccountLevelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAccountLevel">S3StorageLensStorageLensConfigurationAccountLevel</a>

---

##### `AwsOrgInput`<sup>Optional</sup> <a name="AwsOrgInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.awsOrgInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationAwsOrg AwsOrgInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationAwsOrg">S3StorageLensStorageLensConfigurationAwsOrg</a>

---

##### `DataExportInput`<sup>Optional</sup> <a name="DataExportInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.dataExportInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationDataExport DataExportInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationDataExport">S3StorageLensStorageLensConfigurationDataExport</a>

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.excludeInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExclude ExcludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExclude">S3StorageLensStorageLensConfigurationExclude</a>

---

##### `ExpandedPrefixesDataExportInput`<sup>Optional</sup> <a name="ExpandedPrefixesDataExportInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExportInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport ExpandedPrefixesDataExportInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">S3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.includeInput"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfigurationInclude IncludeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationInclude">S3StorageLensStorageLensConfigurationInclude</a>

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabledInput"></a>

```csharp
public bool|IResolvable IsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixDelimiterInput`<sup>Optional</sup> <a name="PrefixDelimiterInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiterInput"></a>

```csharp
public string PrefixDelimiterInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.isEnabled"></a>

```csharp
public bool|IResolvable IsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixDelimiter`<sup>Required</sup> <a name="PrefixDelimiter" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter"></a>

```csharp
public string PrefixDelimiter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensStorageLensConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensStorageLensConfiguration">S3StorageLensStorageLensConfiguration</a>

---


### S3StorageLensTagsList <a name="S3StorageLensTagsList" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get"></a>

```csharp
private S3StorageLensTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsList.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>[]

---


### S3StorageLensTagsOutputReference <a name="S3StorageLensTagsOutputReference" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3StorageLensTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLens.S3StorageLensTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3StorageLensTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3StorageLens.S3StorageLensTags">S3StorageLensTags</a>

---



