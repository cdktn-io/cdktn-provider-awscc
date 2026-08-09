# `guarddutyTrustedEntitySet` Submodule <a name="`guarddutyTrustedEntitySet` Submodule" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyTrustedEntitySet <a name="GuarddutyTrustedEntitySet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set awscc_guardduty_trusted_entity_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyTrustedEntitySet(Construct Scope, string Id, GuarddutyTrustedEntitySetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig">GuarddutyTrustedEntitySetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig">GuarddutyTrustedEntitySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetActivate">ResetActivate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetDetectorId">ResetDetectorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetExpectedBucketOwner">ResetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags"></a>

```csharp
private void PutTags(IResolvable|GuarddutyTrustedEntitySetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

---

##### `ResetActivate` <a name="ResetActivate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetActivate"></a>

```csharp
private void ResetActivate()
```

##### `ResetDetectorId` <a name="ResetDetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetDetectorId"></a>

```csharp
private void ResetDetectorId()
```

##### `ResetExpectedBucketOwner` <a name="ResetExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetExpectedBucketOwner"></a>

```csharp
private void ResetExpectedBucketOwner()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyTrustedEntitySet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyTrustedEntitySet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyTrustedEntitySet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GuarddutyTrustedEntitySet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GuarddutyTrustedEntitySet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GuarddutyTrustedEntitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GuarddutyTrustedEntitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.errorDetails">ErrorDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList">GuarddutyTrustedEntitySetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.trustedEntitySetId">TrustedEntitySetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activateInput">ActivateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorIdInput">DetectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwnerInput">ExpectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activate">Activate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorId">DetectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ErrorDetails`<sup>Required</sup> <a name="ErrorDetails" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.errorDetails"></a>

```csharp
public string ErrorDetails { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tags"></a>

```csharp
public GuarddutyTrustedEntitySetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList">GuarddutyTrustedEntitySetTagsList</a>

---

##### `TrustedEntitySetId`<sup>Required</sup> <a name="TrustedEntitySetId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.trustedEntitySetId"></a>

```csharp
public string TrustedEntitySetId { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ActivateInput`<sup>Optional</sup> <a name="ActivateInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activateInput"></a>

```csharp
public bool|IResolvable ActivateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DetectorIdInput`<sup>Optional</sup> <a name="DetectorIdInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorIdInput"></a>

```csharp
public string DetectorIdInput { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwnerInput`<sup>Optional</sup> <a name="ExpectedBucketOwnerInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwnerInput"></a>

```csharp
public string ExpectedBucketOwnerInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tagsInput"></a>

```csharp
public IResolvable|GuarddutyTrustedEntitySetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

---

##### `Activate`<sup>Required</sup> <a name="Activate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.activate"></a>

```csharp
public bool|IResolvable Activate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DetectorId`<sup>Required</sup> <a name="DetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.detectorId"></a>

```csharp
public string DetectorId { get; }
```

- *Type:* string

---

##### `ExpectedBucketOwner`<sup>Required</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyTrustedEntitySetConfig <a name="GuarddutyTrustedEntitySetConfig" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyTrustedEntitySetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Format,
    string Location,
    bool|IResolvable Activate = null,
    string DetectorId = null,
    string ExpectedBucketOwner = null,
    string Name = null,
    IResolvable|GuarddutyTrustedEntitySetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#format GuarddutyTrustedEntitySet#format}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#location GuarddutyTrustedEntitySet#location}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.activate">Activate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#activate GuarddutyTrustedEntitySet#activate}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.detectorId">DetectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#detector_id GuarddutyTrustedEntitySet#detector_id}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.expectedBucketOwner">ExpectedBucketOwner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#expected_bucket_owner GuarddutyTrustedEntitySet#expected_bucket_owner}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#name GuarddutyTrustedEntitySet#name}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#tags GuarddutyTrustedEntitySet#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#format GuarddutyTrustedEntitySet#format}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#location GuarddutyTrustedEntitySet#location}.

---

##### `Activate`<sup>Optional</sup> <a name="Activate" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.activate"></a>

```csharp
public bool|IResolvable Activate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#activate GuarddutyTrustedEntitySet#activate}.

---

##### `DetectorId`<sup>Optional</sup> <a name="DetectorId" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.detectorId"></a>

```csharp
public string DetectorId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#detector_id GuarddutyTrustedEntitySet#detector_id}.

---

##### `ExpectedBucketOwner`<sup>Optional</sup> <a name="ExpectedBucketOwner" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.expectedBucketOwner"></a>

```csharp
public string ExpectedBucketOwner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#expected_bucket_owner GuarddutyTrustedEntitySet#expected_bucket_owner}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#name GuarddutyTrustedEntitySet#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetConfig.property.tags"></a>

```csharp
public IResolvable|GuarddutyTrustedEntitySetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#tags GuarddutyTrustedEntitySet#tags}.

---

### GuarddutyTrustedEntitySetTags <a name="GuarddutyTrustedEntitySetTags" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyTrustedEntitySetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#key GuarddutyTrustedEntitySet#key}. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#value GuarddutyTrustedEntitySet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#key GuarddutyTrustedEntitySet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/guardduty_trusted_entity_set#value GuarddutyTrustedEntitySet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyTrustedEntitySetTagsList <a name="GuarddutyTrustedEntitySetTagsList" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyTrustedEntitySetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get"></a>

```csharp
private GuarddutyTrustedEntitySetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsList.property.internalValue"></a>

```csharp
public IResolvable|GuarddutyTrustedEntitySetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>[]

---


### GuarddutyTrustedEntitySetTagsOutputReference <a name="GuarddutyTrustedEntitySetTagsOutputReference" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GuarddutyTrustedEntitySetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GuarddutyTrustedEntitySetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.guarddutyTrustedEntitySet.GuarddutyTrustedEntitySetTags">GuarddutyTrustedEntitySetTags</a>

---



