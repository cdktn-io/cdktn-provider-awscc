# `imagebuilderLifecyclePolicy` Submodule <a name="`imagebuilderLifecyclePolicy` Submodule" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderLifecyclePolicy <a name="ImagebuilderLifecyclePolicy" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy awscc_imagebuilder_lifecycle_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicy(Construct Scope, string Id, ImagebuilderLifecyclePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig">ImagebuilderLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails">PutPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection">PutResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyDetails` <a name="PutPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails"></a>

```csharp
private void PutPolicyDetails(IResolvable|ImagebuilderLifecyclePolicyPolicyDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putPolicyDetails.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

---

##### `PutResourceSelection` <a name="PutResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection"></a>

```csharp
private void PutResourceSelection(ImagebuilderLifecyclePolicyResourceSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.putResourceSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderLifecyclePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderLifecyclePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderLifecyclePolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ImagebuilderLifecyclePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ImagebuilderLifecyclePolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ImagebuilderLifecyclePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ImagebuilderLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails">PolicyDetails</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection">ResourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput">PolicyDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput">ResourceSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole">ExecutionRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetails"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsList PolicyDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList">ImagebuilderLifecyclePolicyPolicyDetailsList</a>

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelection"></a>

```csharp
public ImagebuilderLifecyclePolicyResourceSelectionOutputReference ResourceSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference">ImagebuilderLifecyclePolicyResourceSelectionOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRoleInput"></a>

```csharp
public string ExecutionRoleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyDetailsInput`<sup>Optional</sup> <a name="PolicyDetailsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.policyDetailsInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetails[] PolicyDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

---

##### `ResourceSelectionInput`<sup>Optional</sup> <a name="ResourceSelectionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceSelectionInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyResourceSelection ResourceSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.executionRole"></a>

```csharp
public string ExecutionRole { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderLifecyclePolicyConfig <a name="ImagebuilderLifecyclePolicyConfig" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ExecutionRole,
    string Name,
    IResolvable|ImagebuilderLifecyclePolicyPolicyDetails[] PolicyDetails,
    ImagebuilderLifecyclePolicyResourceSelection ResourceSelection,
    string ResourceType,
    string Description = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole">ExecutionRole</a></code> | <code>string</code> | The execution role of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name">Name</a></code> | <code>string</code> | The name of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails">PolicyDetails</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]</code> | The policy details of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection">ResourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | The resource selection of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | The resource type of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description">Description</a></code> | <code>string</code> | The description of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status">Status</a></code> | <code>string</code> | The status of the lifecycle policy. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The tags associated with the lifecycle policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.executionRole"></a>

```csharp
public string ExecutionRole { get; set; }
```

- *Type:* string

The execution role of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#execution_role ImagebuilderLifecyclePolicy#execution_role}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.policyDetails"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetails[] PolicyDetails { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

The policy details of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#policy_details ImagebuilderLifecyclePolicy#policy_details}

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceSelection"></a>

```csharp
public ImagebuilderLifecyclePolicyResourceSelection ResourceSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

The resource selection of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_selection ImagebuilderLifecyclePolicy#resource_selection}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The resource type of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#resource_type ImagebuilderLifecyclePolicy#resource_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#description ImagebuilderLifecyclePolicy#description}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#status ImagebuilderLifecyclePolicy#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The tags associated with the lifecycle policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tags ImagebuilderLifecyclePolicy#tags}

---

### ImagebuilderLifecyclePolicyPolicyDetails <a name="ImagebuilderLifecyclePolicyPolicyDetails" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetails {
    ImagebuilderLifecyclePolicyPolicyDetailsAction Action,
    ImagebuilderLifecyclePolicyPolicyDetailsFilter Filter,
    ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules ExclusionRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | The action of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | The filters to apply of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules">ExclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | The exclusion rules to apply of the policy detail. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.action"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsAction Action { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

The action of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#action ImagebuilderLifecyclePolicy#action}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.filter"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

The filters to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#filter ImagebuilderLifecyclePolicy#filter}

---

##### `ExclusionRules`<sup>Optional</sup> <a name="ExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails.property.exclusionRules"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules ExclusionRules { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

The exclusion rules to apply of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#exclusion_rules ImagebuilderLifecyclePolicy#exclusion_rules}

---

### ImagebuilderLifecyclePolicyPolicyDetailsAction <a name="ImagebuilderLifecyclePolicyPolicyDetailsAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsAction {
    string Type,
    ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources IncludeResources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type">Type</a></code> | <code>string</code> | The action type of the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources">IncludeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | The included resources of the policy detail. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The action type of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `IncludeResources`<sup>Optional</sup> <a name="IncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction.property.includeResources"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources IncludeResources { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

The included resources of the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#include_resources ImagebuilderLifecyclePolicy#include_resources}

---

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources {
    bool|IResolvable Amis = null,
    bool|IResolvable Containers = null,
    bool|IResolvable Snapshots = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis">Amis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure lifecycle actions on AMIs. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers">Containers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure lifecycle actions on containers. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots">Snapshots</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to configure lifecycle actions on snapshots. |

---

##### `Amis`<sup>Optional</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.amis"></a>

```csharp
public bool|IResolvable Amis { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure lifecycle actions on AMIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.containers"></a>

```csharp
public bool|IResolvable Containers { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure lifecycle actions on containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#containers ImagebuilderLifecyclePolicy#containers}

---

##### `Snapshots`<sup>Optional</sup> <a name="Snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources.property.snapshots"></a>

```csharp
public bool|IResolvable Snapshots { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to configure lifecycle actions on snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#snapshots ImagebuilderLifecyclePolicy#snapshots}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules {
    ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis Amis = null,
    System.Collections.Generic.IDictionary<string, string> TagMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis">Amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | The AMI exclusion rules for the policy detail. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap">TagMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Image Builder tags to filter on. |

---

##### `Amis`<sup>Optional</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.amis"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis Amis { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

The AMI exclusion rules for the policy detail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#amis ImagebuilderLifecyclePolicy#amis}

---

##### `TagMap`<sup>Optional</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules.property.tagMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Image Builder tags to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis {
    bool|IResolvable IsPublic = null,
    ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched LastLaunched = null,
    string[] Regions = null,
    string[] SharedAccounts = null,
    System.Collections.Generic.IDictionary<string, string> TagMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic">IsPublic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use to apply lifecycle policy actions on whether the AMI is public. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched">LastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | Use to apply lifecycle policy actions on AMIs launched before a certain time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions">Regions</a></code> | <code>string[]</code> | Use to apply lifecycle policy actions on AMIs distributed to a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts">SharedAccounts</a></code> | <code>string[]</code> | Use to apply lifecycle policy actions on AMIs shared with a set of regions. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap">TagMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The AMIs to select by tag. |

---

##### `IsPublic`<sup>Optional</sup> <a name="IsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.isPublic"></a>

```csharp
public bool|IResolvable IsPublic { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use to apply lifecycle policy actions on whether the AMI is public.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#is_public ImagebuilderLifecyclePolicy#is_public}

---

##### `LastLaunched`<sup>Optional</sup> <a name="LastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.lastLaunched"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched LastLaunched { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

Use to apply lifecycle policy actions on AMIs launched before a certain time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#last_launched ImagebuilderLifecyclePolicy#last_launched}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Use to apply lifecycle policy actions on AMIs distributed to a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#regions ImagebuilderLifecyclePolicy#regions}

---

##### `SharedAccounts`<sup>Optional</sup> <a name="SharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.sharedAccounts"></a>

```csharp
public string[] SharedAccounts { get; set; }
```

- *Type:* string[]

Use to apply lifecycle policy actions on AMIs shared with a set of regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#shared_accounts ImagebuilderLifecyclePolicy#shared_accounts}

---

##### `TagMap`<sup>Optional</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis.property.tagMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The AMIs to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit">Unit</a></code> | <code>string</code> | The value's time unit. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value">Value</a></code> | <code>double</code> | The last launched value. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The last launched value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

### ImagebuilderLifecyclePolicyPolicyDetailsFilter <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsFilter {
    string Type,
    double Value,
    double RetainAtLeast = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type">Type</a></code> | <code>string</code> | The filter type. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value">Value</a></code> | <code>double</code> | The filter value. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast">RetainAtLeast</a></code> | <code>double</code> | The minimum number of Image Builder resources to retain. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit">Unit</a></code> | <code>string</code> | The value's time unit. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The filter type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#type ImagebuilderLifecyclePolicy#type}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#value ImagebuilderLifecyclePolicy#value}

---

##### `RetainAtLeast`<sup>Optional</sup> <a name="RetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.retainAtLeast"></a>

```csharp
public double RetainAtLeast { get; set; }
```

- *Type:* double

The minimum number of Image Builder resources to retain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#retain_at_least ImagebuilderLifecyclePolicy#retain_at_least}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The value's time unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#unit ImagebuilderLifecyclePolicy#unit}

---

### ImagebuilderLifecyclePolicyResourceSelection <a name="ImagebuilderLifecyclePolicyResourceSelection" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyResourceSelection {
    IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes[] Recipes = null,
    System.Collections.Generic.IDictionary<string, string> TagMap = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes">Recipes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]</code> | The recipes to select. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap">TagMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Image Builder resources to select by tag. |

---

##### `Recipes`<sup>Optional</sup> <a name="Recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.recipes"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes[] Recipes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

The recipes to select.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#recipes ImagebuilderLifecyclePolicy#recipes}

---

##### `TagMap`<sup>Optional</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection.property.tagMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMap { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Image Builder resources to select by tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#tag_map ImagebuilderLifecyclePolicy#tag_map}

---

### ImagebuilderLifecyclePolicyResourceSelectionRecipes <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyResourceSelectionRecipes {
    string Name = null,
    string SemanticVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name">Name</a></code> | <code>string</code> | The recipe name. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | The recipe version. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The recipe name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#name ImagebuilderLifecyclePolicy#name}

---

##### `SemanticVersion`<sup>Optional</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; set; }
```

- *Type:* string

The recipe version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/imagebuilder_lifecycle_policy#semantic_version ImagebuilderLifecyclePolicy#semantic_version}

---

## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis">ResetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots">ResetSnapshots</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmis` <a name="ResetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetAmis"></a>

```csharp
private void ResetAmis()
```

##### `ResetContainers` <a name="ResetContainers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetContainers"></a>

```csharp
private void ResetContainers()
```

##### `ResetSnapshots` <a name="ResetSnapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.resetSnapshots"></a>

```csharp
private void ResetSnapshots()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput">AmisInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput">ContainersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput">SnapshotsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis">Amis</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers">Containers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots">Snapshots</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AmisInput`<sup>Optional</sup> <a name="AmisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amisInput"></a>

```csharp
public bool|IResolvable AmisInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containersInput"></a>

```csharp
public bool|IResolvable ContainersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SnapshotsInput`<sup>Optional</sup> <a name="SnapshotsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshotsInput"></a>

```csharp
public bool|IResolvable SnapshotsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.amis"></a>

```csharp
public bool|IResolvable Amis { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.containers"></a>

```csharp
public bool|IResolvable Containers { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Snapshots`<sup>Required</sup> <a name="Snapshots" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.snapshots"></a>

```csharp
public bool|IResolvable Snapshots { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources">PutIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources">ResetIncludeResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncludeResources` <a name="PutIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources"></a>

```csharp
private void PutIncludeResources(ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.putIncludeResources.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `ResetIncludeResources` <a name="ResetIncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.resetIncludeResources"></a>

```csharp
private void ResetIncludeResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources">IncludeResources</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput">IncludeResourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncludeResources`<sup>Required</sup> <a name="IncludeResources" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResources"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference IncludeResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResourcesOutputReference</a>

---

##### `IncludeResourcesInput`<sup>Optional</sup> <a name="IncludeResourcesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.includeResourcesInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources IncludeResourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources">ImagebuilderLifecyclePolicyPolicyDetailsActionIncludeResources</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsAction InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched">PutLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic">ResetIsPublic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched">ResetLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts">ResetSharedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap">ResetTagMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLastLaunched` <a name="PutLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched"></a>

```csharp
private void PutLastLaunched(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.putLastLaunched.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `ResetIsPublic` <a name="ResetIsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetIsPublic"></a>

```csharp
private void ResetIsPublic()
```

##### `ResetLastLaunched` <a name="ResetLastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetLastLaunched"></a>

```csharp
private void ResetLastLaunched()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetSharedAccounts` <a name="ResetSharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetSharedAccounts"></a>

```csharp
private void ResetSharedAccounts()
```

##### `ResetTagMap` <a name="ResetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.resetTagMap"></a>

```csharp
private void ResetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched">LastLaunched</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput">IsPublicInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput">LastLaunchedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput">SharedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput">TagMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic">IsPublic</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts">SharedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap">TagMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastLaunched`<sup>Required</sup> <a name="LastLaunched" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunched"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference LastLaunched { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunchedOutputReference</a>

---

##### `IsPublicInput`<sup>Optional</sup> <a name="IsPublicInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublicInput"></a>

```csharp
public bool|IResolvable IsPublicInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LastLaunchedInput`<sup>Optional</sup> <a name="LastLaunchedInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.lastLaunchedInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched LastLaunchedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisLastLaunched</a>

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `SharedAccountsInput`<sup>Optional</sup> <a name="SharedAccountsInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccountsInput"></a>

```csharp
public string[] SharedAccountsInput { get; }
```

- *Type:* string[]

---

##### `TagMapInput`<sup>Optional</sup> <a name="TagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.isPublic"></a>

```csharp
public bool|IResolvable IsPublic { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `SharedAccounts`<sup>Required</sup> <a name="SharedAccounts" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.sharedAccounts"></a>

```csharp
public string[] SharedAccounts { get; }
```

- *Type:* string[]

---

##### `TagMap`<sup>Required</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.tagMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis">PutAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis">ResetAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap">ResetTagMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAmis` <a name="PutAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis"></a>

```csharp
private void PutAmis(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.putAmis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `ResetAmis` <a name="ResetAmis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetAmis"></a>

```csharp
private void ResetAmis()
```

##### `ResetTagMap` <a name="ResetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.resetTagMap"></a>

```csharp
private void ResetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis">Amis</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput">AmisInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput">TagMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap">TagMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Amis`<sup>Required</sup> <a name="Amis" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amis"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference Amis { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmisOutputReference</a>

---

##### `AmisInput`<sup>Optional</sup> <a name="AmisInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.amisInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis AmisInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesAmis</a>

---

##### `TagMapInput`<sup>Optional</sup> <a name="TagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagMap`<sup>Required</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.tagMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast">ResetRetainAtLeast</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetainAtLeast` <a name="ResetRetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetRetainAtLeast"></a>

```csharp
private void ResetRetainAtLeast()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput">RetainAtLeastInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast">RetainAtLeast</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RetainAtLeastInput`<sup>Optional</sup> <a name="RetainAtLeastInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeastInput"></a>

```csharp
public double RetainAtLeastInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `RetainAtLeast`<sup>Required</sup> <a name="RetainAtLeast" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.retainAtLeast"></a>

```csharp
public double RetainAtLeast { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---


### ImagebuilderLifecyclePolicyPolicyDetailsList <a name="ImagebuilderLifecyclePolicyPolicyDetailsList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get"></a>

```csharp
private ImagebuilderLifecyclePolicyPolicyDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetails[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>[]

---


### ImagebuilderLifecyclePolicyPolicyDetailsOutputReference <a name="ImagebuilderLifecyclePolicyPolicyDetailsOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyPolicyDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules">PutExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules">ResetExclusionRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction"></a>

```csharp
private void PutAction(ImagebuilderLifecyclePolicyPolicyDetailsAction Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `PutExclusionRules` <a name="PutExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules"></a>

```csharp
private void PutExclusionRules(ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putExclusionRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter"></a>

```csharp
private void PutFilter(ImagebuilderLifecyclePolicyPolicyDetailsFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `ResetExclusionRules` <a name="ResetExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.resetExclusionRules"></a>

```csharp
private void ResetExclusionRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action">Action</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules">ExclusionRules</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput">ActionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput">ExclusionRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.action"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsActionOutputReference</a>

---

##### `ExclusionRules`<sup>Required</sup> <a name="ExclusionRules" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRules"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference ExclusionRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRulesOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filter"></a>

```csharp
public ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference">ImagebuilderLifecyclePolicyPolicyDetailsFilterOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.actionInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsAction ActionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsAction">ImagebuilderLifecyclePolicyPolicyDetailsAction</a>

---

##### `ExclusionRulesInput`<sup>Optional</sup> <a name="ExclusionRulesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.exclusionRulesInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules ExclusionRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules">ImagebuilderLifecyclePolicyPolicyDetailsExclusionRules</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.filterInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetailsFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsFilter">ImagebuilderLifecyclePolicyPolicyDetailsFilter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyPolicyDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyPolicyDetails">ImagebuilderLifecyclePolicyPolicyDetails</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyResourceSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes">PutRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes">ResetRecipes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap">ResetTagMap</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecipes` <a name="PutRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes"></a>

```csharp
private void PutRecipes(IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.putRecipes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

---

##### `ResetRecipes` <a name="ResetRecipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetRecipes"></a>

```csharp
private void ResetRecipes()
```

##### `ResetTagMap` <a name="ResetTagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.resetTagMap"></a>

```csharp
private void ResetTagMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes">Recipes</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput">RecipesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput">TagMapInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap">TagMap</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Recipes`<sup>Required</sup> <a name="Recipes" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipes"></a>

```csharp
public ImagebuilderLifecyclePolicyResourceSelectionRecipesList Recipes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList">ImagebuilderLifecyclePolicyResourceSelectionRecipesList</a>

---

##### `RecipesInput`<sup>Optional</sup> <a name="RecipesInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.recipesInput"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes[] RecipesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

---

##### `TagMapInput`<sup>Optional</sup> <a name="TagMapInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMapInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMapInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagMap`<sup>Required</sup> <a name="TagMap" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.tagMap"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagMap { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyResourceSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelection">ImagebuilderLifecyclePolicyResourceSelection</a>

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesList <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesList" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyResourceSelectionRecipesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get"></a>

```csharp
private ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesList.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>[]

---


### ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference <a name="ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion">ResetSemanticVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSemanticVersion` <a name="ResetSemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.resetSemanticVersion"></a>

```csharp
private void ResetSemanticVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput">SemanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion">SemanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SemanticVersionInput`<sup>Optional</sup> <a name="SemanticVersionInput" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersionInput"></a>

```csharp
public string SemanticVersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SemanticVersion`<sup>Required</sup> <a name="SemanticVersion" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.semanticVersion"></a>

```csharp
public string SemanticVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ImagebuilderLifecyclePolicyResourceSelectionRecipes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.imagebuilderLifecyclePolicy.ImagebuilderLifecyclePolicyResourceSelectionRecipes">ImagebuilderLifecyclePolicyResourceSelectionRecipes</a>

---



