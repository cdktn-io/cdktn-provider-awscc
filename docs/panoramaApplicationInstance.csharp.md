# `panoramaApplicationInstance` Submodule <a name="`panoramaApplicationInstance` Submodule" id="@cdktn/provider-awscc.panoramaApplicationInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaApplicationInstance <a name="PanoramaApplicationInstance" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance awscc_panorama_application_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstance(Construct Scope, string Id, PanoramaApplicationInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig">PanoramaApplicationInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig">PanoramaApplicationInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload">PutManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload">PutManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace">ResetApplicationInstanceIdToReplace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload">ResetManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn">ResetRuntimeRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManifestOverridesPayload` <a name="PutManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload"></a>

```csharp
private void PutManifestOverridesPayload(PanoramaApplicationInstanceManifestOverridesPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestOverridesPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `PutManifestPayload` <a name="PutManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload"></a>

```csharp
private void PutManifestPayload(PanoramaApplicationInstanceManifestPayload Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putManifestPayload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags"></a>

```csharp
private void PutTags(IResolvable|PanoramaApplicationInstanceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

---

##### `ResetApplicationInstanceIdToReplace` <a name="ResetApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetApplicationInstanceIdToReplace"></a>

```csharp
private void ResetApplicationInstanceIdToReplace()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetManifestOverridesPayload` <a name="ResetManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetManifestOverridesPayload"></a>

```csharp
private void ResetManifestOverridesPayload()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRuntimeRoleArn` <a name="ResetRuntimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetRuntimeRoleArn"></a>

```csharp
private void ResetRuntimeRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaApplicationInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaApplicationInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaApplicationInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

PanoramaApplicationInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PanoramaApplicationInstance resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PanoramaApplicationInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PanoramaApplicationInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaApplicationInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId">ApplicationInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime">CreatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName">DefaultRuntimeContextDeviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus">HealthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload">ManifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload">ManifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription">StatusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput">ApplicationInstanceIdToReplaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput">DefaultRuntimeContextDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput">ManifestOverridesPayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput">ManifestPayloadInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput">RuntimeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace">ApplicationInstanceIdToReplace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice">DefaultRuntimeContextDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn">RuntimeRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationInstanceId`<sup>Required</sup> <a name="ApplicationInstanceId" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceId"></a>

```csharp
public string ApplicationInstanceId { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.createdTime"></a>

```csharp
public double CreatedTime { get; }
```

- *Type:* double

---

##### `DefaultRuntimeContextDeviceName`<sup>Required</sup> <a name="DefaultRuntimeContextDeviceName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceName"></a>

```csharp
public string DefaultRuntimeContextDeviceName { get; }
```

- *Type:* string

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.healthStatus"></a>

```csharp
public string HealthStatus { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.lastUpdatedTime"></a>

```csharp
public double LastUpdatedTime { get; }
```

- *Type:* double

---

##### `ManifestOverridesPayload`<sup>Required</sup> <a name="ManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayload"></a>

```csharp
public PanoramaApplicationInstanceManifestOverridesPayloadOutputReference ManifestOverridesPayload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference">PanoramaApplicationInstanceManifestOverridesPayloadOutputReference</a>

---

##### `ManifestPayload`<sup>Required</sup> <a name="ManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayload"></a>

```csharp
public PanoramaApplicationInstanceManifestPayloadOutputReference ManifestPayload { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference">PanoramaApplicationInstanceManifestPayloadOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.statusDescription"></a>

```csharp
public string StatusDescription { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tags"></a>

```csharp
public PanoramaApplicationInstanceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList">PanoramaApplicationInstanceTagsList</a>

---

##### `ApplicationInstanceIdToReplaceInput`<sup>Optional</sup> <a name="ApplicationInstanceIdToReplaceInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplaceInput"></a>

```csharp
public string ApplicationInstanceIdToReplaceInput { get; }
```

- *Type:* string

---

##### `DefaultRuntimeContextDeviceInput`<sup>Optional</sup> <a name="DefaultRuntimeContextDeviceInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDeviceInput"></a>

```csharp
public string DefaultRuntimeContextDeviceInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ManifestOverridesPayloadInput`<sup>Optional</sup> <a name="ManifestOverridesPayloadInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestOverridesPayloadInput"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceManifestOverridesPayload ManifestOverridesPayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---

##### `ManifestPayloadInput`<sup>Optional</sup> <a name="ManifestPayloadInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.manifestPayloadInput"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceManifestPayload ManifestPayloadInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RuntimeRoleArnInput`<sup>Optional</sup> <a name="RuntimeRoleArnInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArnInput"></a>

```csharp
public string RuntimeRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tagsInput"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

---

##### `ApplicationInstanceIdToReplace`<sup>Required</sup> <a name="ApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.applicationInstanceIdToReplace"></a>

```csharp
public string ApplicationInstanceIdToReplace { get; }
```

- *Type:* string

---

##### `DefaultRuntimeContextDevice`<sup>Required</sup> <a name="DefaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.defaultRuntimeContextDevice"></a>

```csharp
public string DefaultRuntimeContextDevice { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeRoleArn`<sup>Required</sup> <a name="RuntimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.runtimeRoleArn"></a>

```csharp
public string RuntimeRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaApplicationInstanceConfig <a name="PanoramaApplicationInstanceConfig" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DefaultRuntimeContextDevice,
    PanoramaApplicationInstanceManifestPayload ManifestPayload,
    string ApplicationInstanceIdToReplace = null,
    string Description = null,
    PanoramaApplicationInstanceManifestOverridesPayload ManifestOverridesPayload = null,
    string Name = null,
    string RuntimeRoleArn = null,
    IResolvable|PanoramaApplicationInstanceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice">DefaultRuntimeContextDevice</a></code> | <code>string</code> | The device's ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload">ManifestPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | The application's manifest document. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace">ApplicationInstanceIdToReplace</a></code> | <code>string</code> | The ID of an application instance to replace with the new instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description">Description</a></code> | <code>string</code> | A description for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload">ManifestOverridesPayload</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | Setting overrides for the application manifest. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name">Name</a></code> | <code>string</code> | A name for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn">RuntimeRoleArn</a></code> | <code>string</code> | The ARN of a runtime role for the application instance. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]</code> | Tags for the application instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DefaultRuntimeContextDevice`<sup>Required</sup> <a name="DefaultRuntimeContextDevice" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.defaultRuntimeContextDevice"></a>

```csharp
public string DefaultRuntimeContextDevice { get; set; }
```

- *Type:* string

The device's ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#default_runtime_context_device PanoramaApplicationInstance#default_runtime_context_device}

---

##### `ManifestPayload`<sup>Required</sup> <a name="ManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestPayload"></a>

```csharp
public PanoramaApplicationInstanceManifestPayload ManifestPayload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

The application's manifest document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#manifest_payload PanoramaApplicationInstance#manifest_payload}

---

##### `ApplicationInstanceIdToReplace`<sup>Optional</sup> <a name="ApplicationInstanceIdToReplace" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.applicationInstanceIdToReplace"></a>

```csharp
public string ApplicationInstanceIdToReplace { get; set; }
```

- *Type:* string

The ID of an application instance to replace with the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#application_instance_id_to_replace PanoramaApplicationInstance#application_instance_id_to_replace}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#description PanoramaApplicationInstance#description}

---

##### `ManifestOverridesPayload`<sup>Optional</sup> <a name="ManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.manifestOverridesPayload"></a>

```csharp
public PanoramaApplicationInstanceManifestOverridesPayload ManifestOverridesPayload { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

Setting overrides for the application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#manifest_overrides_payload PanoramaApplicationInstance#manifest_overrides_payload}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#name PanoramaApplicationInstance#name}

---

##### `RuntimeRoleArn`<sup>Optional</sup> <a name="RuntimeRoleArn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.runtimeRoleArn"></a>

```csharp
public string RuntimeRoleArn { get; set; }
```

- *Type:* string

The ARN of a runtime role for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#runtime_role_arn PanoramaApplicationInstance#runtime_role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceConfig.property.tags"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

Tags for the application instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#tags PanoramaApplicationInstance#tags}

---

### PanoramaApplicationInstanceManifestOverridesPayload <a name="PanoramaApplicationInstanceManifestOverridesPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceManifestOverridesPayload {
    string PayloadData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData">PayloadData</a></code> | <code>string</code> | The overrides document. |

---

##### `PayloadData`<sup>Optional</sup> <a name="PayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload.property.payloadData"></a>

```csharp
public string PayloadData { get; set; }
```

- *Type:* string

The overrides document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceManifestPayload <a name="PanoramaApplicationInstanceManifestPayload" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceManifestPayload {
    string PayloadData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData">PayloadData</a></code> | <code>string</code> | The application manifest. |

---

##### `PayloadData`<sup>Optional</sup> <a name="PayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload.property.payloadData"></a>

```csharp
public string PayloadData { get; set; }
```

- *Type:* string

The application manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#payload_data PanoramaApplicationInstance#payload_data}

---

### PanoramaApplicationInstanceTags <a name="PanoramaApplicationInstanceTags" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#key PanoramaApplicationInstance#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/panorama_application_instance#value PanoramaApplicationInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PanoramaApplicationInstanceManifestOverridesPayloadOutputReference <a name="PanoramaApplicationInstanceManifestOverridesPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceManifestOverridesPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData">ResetPayloadData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPayloadData` <a name="ResetPayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.resetPayloadData"></a>

```csharp
private void ResetPayloadData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput">PayloadDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData">PayloadData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PayloadDataInput`<sup>Optional</sup> <a name="PayloadDataInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadDataInput"></a>

```csharp
public string PayloadDataInput { get; }
```

- *Type:* string

---

##### `PayloadData`<sup>Required</sup> <a name="PayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.payloadData"></a>

```csharp
public string PayloadData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceManifestOverridesPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestOverridesPayload">PanoramaApplicationInstanceManifestOverridesPayload</a>

---


### PanoramaApplicationInstanceManifestPayloadOutputReference <a name="PanoramaApplicationInstanceManifestPayloadOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceManifestPayloadOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData">ResetPayloadData</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPayloadData` <a name="ResetPayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.resetPayloadData"></a>

```csharp
private void ResetPayloadData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput">PayloadDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData">PayloadData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PayloadDataInput`<sup>Optional</sup> <a name="PayloadDataInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadDataInput"></a>

```csharp
public string PayloadDataInput { get; }
```

- *Type:* string

---

##### `PayloadData`<sup>Required</sup> <a name="PayloadData" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.payloadData"></a>

```csharp
public string PayloadData { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayloadOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceManifestPayload InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceManifestPayload">PanoramaApplicationInstanceManifestPayload</a>

---


### PanoramaApplicationInstanceTagsList <a name="PanoramaApplicationInstanceTagsList" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get"></a>

```csharp
private PanoramaApplicationInstanceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsList.property.internalValue"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>[]

---


### PanoramaApplicationInstanceTagsOutputReference <a name="PanoramaApplicationInstanceTagsOutputReference" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new PanoramaApplicationInstanceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PanoramaApplicationInstanceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.panoramaApplicationInstance.PanoramaApplicationInstanceTags">PanoramaApplicationInstanceTags</a>

---



