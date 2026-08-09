# `omicsAnnotationStore` Submodule <a name="`omicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.omicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsAnnotationStore <a name="OmicsAnnotationStore" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStore(Construct Scope, string Id, OmicsAnnotationStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig">OmicsAnnotationStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig">OmicsAnnotationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference">PutReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig">PutSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions">PutStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig">ResetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions">ResetStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReference` <a name="PutReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference"></a>

```csharp
private void PutReference(OmicsAnnotationStoreReference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `PutSseConfig` <a name="PutSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig"></a>

```csharp
private void PutSseConfig(OmicsAnnotationStoreSseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `PutStoreOptions` <a name="PutStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions"></a>

```csharp
private void PutStoreOptions(OmicsAnnotationStoreStoreOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetReference` <a name="ResetReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference"></a>

```csharp
private void ResetReference()
```

##### `ResetSseConfig` <a name="ResetSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig"></a>

```csharp
private void ResetSseConfig()
```

##### `ResetStoreOptions` <a name="ResetStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions"></a>

```csharp
private void ResetStoreOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsAnnotationStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsAnnotationStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsAnnotationStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsAnnotationStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsAnnotationStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId">AnnotationStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference">Reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn">StoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes">StoreSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput">ReferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput">SseConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput">StoreFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput">StoreOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat">StoreFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnnotationStoreId`<sup>Required</sup> <a name="AnnotationStoreId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId"></a>

```csharp
public string AnnotationStoreId { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference"></a>

```csharp
public OmicsAnnotationStoreReferenceOutputReference Reference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a>

---

##### `SseConfig`<sup>Required</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig"></a>

```csharp
public OmicsAnnotationStoreSseConfigOutputReference SseConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `StoreArn`<sup>Required</sup> <a name="StoreArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn"></a>

```csharp
public string StoreArn { get; }
```

- *Type:* string

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions"></a>

```csharp
public OmicsAnnotationStoreStoreOptionsOutputReference StoreOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `StoreSizeBytes`<sup>Required</sup> <a name="StoreSizeBytes" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes"></a>

```csharp
public double StoreSizeBytes { get; }
```

- *Type:* double

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput"></a>

```csharp
public IResolvable|OmicsAnnotationStoreReference ReferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `SseConfigInput`<sup>Optional</sup> <a name="SseConfigInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput"></a>

```csharp
public IResolvable|OmicsAnnotationStoreSseConfig SseConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `StoreFormatInput`<sup>Optional</sup> <a name="StoreFormatInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput"></a>

```csharp
public string StoreFormatInput { get; }
```

- *Type:* string

---

##### `StoreOptionsInput`<sup>Optional</sup> <a name="StoreOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput"></a>

```csharp
public IResolvable|OmicsAnnotationStoreStoreOptions StoreOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StoreFormat`<sup>Required</sup> <a name="StoreFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat"></a>

```csharp
public string StoreFormat { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsAnnotationStoreConfig <a name="OmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string StoreFormat,
    string Description = null,
    OmicsAnnotationStoreReference Reference = null,
    OmicsAnnotationStoreSseConfig SseConfig = null,
    OmicsAnnotationStoreStoreOptions StoreOptions = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat">StoreFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference">Reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `StoreFormat`<sup>Required</sup> <a name="StoreFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat"></a>

```csharp
public string StoreFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference"></a>

```csharp
public OmicsAnnotationStoreReference Reference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `SseConfig`<sup>Optional</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig"></a>

```csharp
public OmicsAnnotationStoreSseConfig SseConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `StoreOptions`<sup>Optional</sup> <a name="StoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions"></a>

```csharp
public OmicsAnnotationStoreStoreOptions StoreOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

### OmicsAnnotationStoreReference <a name="OmicsAnnotationStoreReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreReference {
    string ReferenceArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn">ReferenceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}. |

---

##### `ReferenceArn`<sup>Optional</sup> <a name="ReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn"></a>

```csharp
public string ReferenceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}.

---

### OmicsAnnotationStoreSseConfig <a name="OmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreSseConfig {
    string KeyArn = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn">KeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}. |

---

##### `KeyArn`<sup>Optional</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}.

---

### OmicsAnnotationStoreStoreOptions <a name="OmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreStoreOptions {
    OmicsAnnotationStoreStoreOptionsTsvStoreOptions TsvStoreOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions">TsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}. |

---

##### `TsvStoreOptions`<sup>Optional</sup> <a name="TsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions"></a>

```csharp
public OmicsAnnotationStoreStoreOptionsTsvStoreOptions TsvStoreOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}.

---

### OmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreStoreOptionsTsvStoreOptions {
    string AnnotationType = null,
    System.Collections.Generic.IDictionary<string, string> FormatToHeader = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType">AnnotationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader">FormatToHeader</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema">Schema</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}. |

---

##### `AnnotationType`<sup>Optional</sup> <a name="AnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType"></a>

```csharp
public string AnnotationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}.

---

##### `FormatToHeader`<sup>Optional</sup> <a name="FormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FormatToHeader { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] Schema { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsAnnotationStoreReferenceOutputReference <a name="OmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn">ResetReferenceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceArn` <a name="ResetReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn"></a>

```csharp
private void ResetReferenceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput">ReferenceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn">ReferenceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferenceArnInput`<sup>Optional</sup> <a name="ReferenceArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput"></a>

```csharp
public string ReferenceArnInput { get; }
```

- *Type:* string

---

##### `ReferenceArn`<sup>Required</sup> <a name="ReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```csharp
public string ReferenceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OmicsAnnotationStoreReference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---


### OmicsAnnotationStoreSseConfigOutputReference <a name="OmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreSseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn">ResetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyArn` <a name="ResetKeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn"></a>

```csharp
private void ResetKeyArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OmicsAnnotationStoreSseConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---


### OmicsAnnotationStoreStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreStoreOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions">PutTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions">ResetTsvStoreOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTsvStoreOptions` <a name="PutTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions"></a>

```csharp
private void PutTsvStoreOptions(OmicsAnnotationStoreStoreOptionsTsvStoreOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `ResetTsvStoreOptions` <a name="ResetTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions"></a>

```csharp
private void ResetTsvStoreOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">TsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput">TsvStoreOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TsvStoreOptions`<sup>Required</sup> <a name="TsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```csharp
public OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference TsvStoreOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `TsvStoreOptionsInput`<sup>Optional</sup> <a name="TsvStoreOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput"></a>

```csharp
public IResolvable|OmicsAnnotationStoreStoreOptionsTsvStoreOptions TsvStoreOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OmicsAnnotationStoreStoreOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---


### OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType">ResetAnnotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader">ResetFormatToHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotationType` <a name="ResetAnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType"></a>

```csharp
private void ResetAnnotationType()
```

##### `ResetFormatToHeader` <a name="ResetFormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader"></a>

```csharp
private void ResetFormatToHeader()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema"></a>

```csharp
private void ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput">AnnotationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput">FormatToHeaderInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">AnnotationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">FormatToHeader</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">Schema</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnnotationTypeInput`<sup>Optional</sup> <a name="AnnotationTypeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput"></a>

```csharp
public string AnnotationTypeInput { get; }
```

- *Type:* string

---

##### `FormatToHeaderInput`<sup>Optional</sup> <a name="FormatToHeaderInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FormatToHeaderInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] SchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `AnnotationType`<sup>Required</sup> <a name="AnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```csharp
public string AnnotationType { get; }
```

- *Type:* string

---

##### `FormatToHeader`<sup>Required</sup> <a name="FormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FormatToHeader { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] Schema { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OmicsAnnotationStoreStoreOptionsTsvStoreOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---



