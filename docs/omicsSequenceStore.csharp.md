# `omicsSequenceStore` Submodule <a name="`omicsSequenceStore` Submodule" id="@cdktn/provider-awscc.omicsSequenceStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsSequenceStore <a name="OmicsSequenceStore" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store awscc_omics_sequence_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsSequenceStore(Construct Scope, string Id, OmicsSequenceStoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig">OmicsSequenceStoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig">OmicsSequenceStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig">PutSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation">ResetAccessLogLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily">ResetETagAlgorithmFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation">ResetFallbackLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags">ResetPropagatedSetLevelTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy">ResetS3AccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig">ResetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSseConfig` <a name="PutSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig"></a>

```csharp
private void PutSseConfig(OmicsSequenceStoreSseConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `ResetAccessLogLocation` <a name="ResetAccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation"></a>

```csharp
private void ResetAccessLogLocation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetETagAlgorithmFamily` <a name="ResetETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily"></a>

```csharp
private void ResetETagAlgorithmFamily()
```

##### `ResetFallbackLocation` <a name="ResetFallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation"></a>

```csharp
private void ResetFallbackLocation()
```

##### `ResetPropagatedSetLevelTags` <a name="ResetPropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags"></a>

```csharp
private void ResetPropagatedSetLevelTags()
```

##### `ResetS3AccessPolicy` <a name="ResetS3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy"></a>

```csharp
private void ResetS3AccessPolicy()
```

##### `ResetSseConfig` <a name="ResetSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig"></a>

```csharp
private void ResetSseConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsSequenceStore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsSequenceStore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsSequenceStore.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OmicsSequenceStore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OmicsSequenceStore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OmicsSequenceStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OmicsSequenceStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn">S3AccessPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId">SequenceStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput">AccessLogLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput">ETagAlgorithmFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput">FallbackLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput">PropagatedSetLevelTagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput">S3AccessPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput">SseConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation">AccessLogLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily">ETagAlgorithmFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation">FallbackLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags">PropagatedSetLevelTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy">S3AccessPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3AccessPointArn`<sup>Required</sup> <a name="S3AccessPointArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn"></a>

```csharp
public string S3AccessPointArn { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `SequenceStoreId`<sup>Required</sup> <a name="SequenceStoreId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId"></a>

```csharp
public string SequenceStoreId { get; }
```

- *Type:* string

---

##### `SseConfig`<sup>Required</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig"></a>

```csharp
public OmicsSequenceStoreSseConfigOutputReference SseConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AccessLogLocationInput`<sup>Optional</sup> <a name="AccessLogLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput"></a>

```csharp
public string AccessLogLocationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ETagAlgorithmFamilyInput`<sup>Optional</sup> <a name="ETagAlgorithmFamilyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput"></a>

```csharp
public string ETagAlgorithmFamilyInput { get; }
```

- *Type:* string

---

##### `FallbackLocationInput`<sup>Optional</sup> <a name="FallbackLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput"></a>

```csharp
public string FallbackLocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropagatedSetLevelTagsInput`<sup>Optional</sup> <a name="PropagatedSetLevelTagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput"></a>

```csharp
public string[] PropagatedSetLevelTagsInput { get; }
```

- *Type:* string[]

---

##### `S3AccessPolicyInput`<sup>Optional</sup> <a name="S3AccessPolicyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput"></a>

```csharp
public string S3AccessPolicyInput { get; }
```

- *Type:* string

---

##### `SseConfigInput`<sup>Optional</sup> <a name="SseConfigInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput"></a>

```csharp
public IResolvable|OmicsSequenceStoreSseConfig SseConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccessLogLocation`<sup>Required</sup> <a name="AccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation"></a>

```csharp
public string AccessLogLocation { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ETagAlgorithmFamily`<sup>Required</sup> <a name="ETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily"></a>

```csharp
public string ETagAlgorithmFamily { get; }
```

- *Type:* string

---

##### `FallbackLocation`<sup>Required</sup> <a name="FallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation"></a>

```csharp
public string FallbackLocation { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PropagatedSetLevelTags`<sup>Required</sup> <a name="PropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags"></a>

```csharp
public string[] PropagatedSetLevelTags { get; }
```

- *Type:* string[]

---

##### `S3AccessPolicy`<sup>Required</sup> <a name="S3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy"></a>

```csharp
public string S3AccessPolicy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsSequenceStoreConfig <a name="OmicsSequenceStoreConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsSequenceStoreConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AccessLogLocation = null,
    string Description = null,
    string ETagAlgorithmFamily = null,
    string FallbackLocation = null,
    string[] PropagatedSetLevelTags = null,
    string S3AccessPolicy = null,
    OmicsSequenceStoreSseConfig SseConfig = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name">Name</a></code> | <code>string</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation">AccessLogLocation</a></code> | <code>string</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description">Description</a></code> | <code>string</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily">ETagAlgorithmFamily</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation">FallbackLocation</a></code> | <code>string</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags">PropagatedSetLevelTags</a></code> | <code>string[]</code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy">S3AccessPolicy</a></code> | <code>string</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `AccessLogLocation`<sup>Optional</sup> <a name="AccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation"></a>

```csharp
public string AccessLogLocation { get; set; }
```

- *Type:* string

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `ETagAlgorithmFamily`<sup>Optional</sup> <a name="ETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily"></a>

```csharp
public string ETagAlgorithmFamily { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `FallbackLocation`<sup>Optional</sup> <a name="FallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation"></a>

```csharp
public string FallbackLocation { get; set; }
```

- *Type:* string

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `PropagatedSetLevelTags`<sup>Optional</sup> <a name="PropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags"></a>

```csharp
public string[] PropagatedSetLevelTags { get; set; }
```

- *Type:* string[]

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `S3AccessPolicy`<sup>Optional</sup> <a name="S3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy"></a>

```csharp
public string S3AccessPolicy { get; set; }
```

- *Type:* string

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `SseConfig`<sup>Optional</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig"></a>

```csharp
public OmicsSequenceStoreSseConfig SseConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

### OmicsSequenceStoreSseConfig <a name="OmicsSequenceStoreSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsSequenceStoreSseConfig {
    string KeyArn = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn">KeyArn</a></code> | <code>string</code> | An encryption key ARN. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}. |

---

##### `KeyArn`<sup>Optional</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn"></a>

```csharp
public string KeyArn { get; set; }
```

- *Type:* string

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#key_arn OmicsSequenceStore#key_arn}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsSequenceStoreSseConfigOutputReference <a name="OmicsSequenceStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OmicsSequenceStoreSseConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn">ResetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyArn` <a name="ResetKeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn"></a>

```csharp
private void ResetKeyArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn">KeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput"></a>

```csharp
public string KeyArnInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn"></a>

```csharp
public string KeyArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OmicsSequenceStoreSseConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---



