# `quicksightRefreshSchedule` Submodule <a name="`quicksightRefreshSchedule` Submodule" id="@cdktn/provider-awscc.quicksightRefreshSchedule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightRefreshSchedule <a name="QuicksightRefreshSchedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule awscc_quicksight_refresh_schedule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshSchedule(Construct Scope, string Id, QuicksightRefreshScheduleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig">QuicksightRefreshScheduleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig">QuicksightRefreshScheduleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetDataSetId">ResetDataSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule"></a>

```csharp
private void PutSchedule(QuicksightRefreshScheduleSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

---

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetAwsAccountId"></a>

```csharp
private void ResetAwsAccountId()
```

##### `ResetDataSetId` <a name="ResetDataSetId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetDataSetId"></a>

```csharp
private void ResetDataSetId()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightRefreshSchedule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightRefreshSchedule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightRefreshSchedule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightRefreshSchedule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

QuicksightRefreshSchedule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QuicksightRefreshSchedule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightRefreshSchedule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightRefreshSchedule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightRefreshSchedule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference">QuicksightRefreshScheduleScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetIdInput">DataSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetId">DataSetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.schedule"></a>

```csharp
public QuicksightRefreshScheduleScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference">QuicksightRefreshScheduleScheduleOutputReference</a>

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountIdInput"></a>

```csharp
public string AwsAccountIdInput { get; }
```

- *Type:* string

---

##### `DataSetIdInput`<sup>Optional</sup> <a name="DataSetIdInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetIdInput"></a>

```csharp
public string DataSetIdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.scheduleInput"></a>

```csharp
public IResolvable|QuicksightRefreshScheduleSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; }
```

- *Type:* string

---

##### `DataSetId`<sup>Required</sup> <a name="DataSetId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.dataSetId"></a>

```csharp
public string DataSetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshSchedule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightRefreshScheduleConfig <a name="QuicksightRefreshScheduleConfig" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AwsAccountId = null,
    string DataSetId = null,
    QuicksightRefreshScheduleSchedule Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.awsAccountId">AwsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dataSetId">DataSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.awsAccountId"></a>

```csharp
public string AwsAccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#aws_account_id QuicksightRefreshSchedule#aws_account_id}.

---

##### `DataSetId`<sup>Optional</sup> <a name="DataSetId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.dataSetId"></a>

```csharp
public string DataSetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#data_set_id QuicksightRefreshSchedule#data_set_id}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleConfig.property.schedule"></a>

```csharp
public QuicksightRefreshScheduleSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#schedule QuicksightRefreshSchedule#schedule}.

---

### QuicksightRefreshScheduleSchedule <a name="QuicksightRefreshScheduleSchedule" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleSchedule {
    string RefreshType = null,
    QuicksightRefreshScheduleScheduleScheduleFrequency ScheduleFrequency = null,
    string ScheduleId = null,
    string StartAfterDateTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.refreshType">RefreshType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleFrequency">ScheduleFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | <p>Information about the schedule frequency.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleId">ScheduleId</a></code> | <code>string</code> | <p>An unique identifier for the refresh schedule.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.startAfterDateTime">StartAfterDateTime</a></code> | <code>string</code> | <p>The date time after which refresh is to be scheduled</p>. |

---

##### `RefreshType`<sup>Optional</sup> <a name="RefreshType" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.refreshType"></a>

```csharp
public string RefreshType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#refresh_type QuicksightRefreshSchedule#refresh_type}.

---

##### `ScheduleFrequency`<sup>Optional</sup> <a name="ScheduleFrequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleFrequency"></a>

```csharp
public QuicksightRefreshScheduleScheduleScheduleFrequency ScheduleFrequency { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

<p>Information about the schedule frequency.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#schedule_frequency QuicksightRefreshSchedule#schedule_frequency}

---

##### `ScheduleId`<sup>Optional</sup> <a name="ScheduleId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.scheduleId"></a>

```csharp
public string ScheduleId { get; set; }
```

- *Type:* string

<p>An unique identifier for the refresh schedule.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#schedule_id QuicksightRefreshSchedule#schedule_id}

---

##### `StartAfterDateTime`<sup>Optional</sup> <a name="StartAfterDateTime" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule.property.startAfterDateTime"></a>

```csharp
public string StartAfterDateTime { get; set; }
```

- *Type:* string

<p>The date time after which refresh is to be scheduled</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#start_after_date_time QuicksightRefreshSchedule#start_after_date_time}

---

### QuicksightRefreshScheduleScheduleScheduleFrequency <a name="QuicksightRefreshScheduleScheduleScheduleFrequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleScheduleScheduleFrequency {
    string Interval = null,
    QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay RefreshOnDay = null,
    string TimeOfTheDay = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.interval">Interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.refreshOnDay">RefreshOnDay</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | <p>The day scheduled for refresh.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeOfTheDay">TimeOfTheDay</a></code> | <code>string</code> | <p>The time of the day for scheduled refresh.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeZone">TimeZone</a></code> | <code>string</code> | <p>The timezone for scheduled refresh.</p>. |

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#interval QuicksightRefreshSchedule#interval}.

---

##### `RefreshOnDay`<sup>Optional</sup> <a name="RefreshOnDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.refreshOnDay"></a>

```csharp
public QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay RefreshOnDay { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

<p>The day scheduled for refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#refresh_on_day QuicksightRefreshSchedule#refresh_on_day}

---

##### `TimeOfTheDay`<sup>Optional</sup> <a name="TimeOfTheDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeOfTheDay"></a>

```csharp
public string TimeOfTheDay { get; set; }
```

- *Type:* string

<p>The time of the day for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#time_of_the_day QuicksightRefreshSchedule#time_of_the_day}

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

<p>The timezone for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#time_zone QuicksightRefreshSchedule#time_zone}

---

### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay {
    string DayOfMonth = null,
    string DayOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfMonth">DayOfMonth</a></code> | <code>string</code> | <p>The Day Of Month for scheduled refresh.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}. |

---

##### `DayOfMonth`<sup>Optional</sup> <a name="DayOfMonth" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfMonth"></a>

```csharp
public string DayOfMonth { get; set; }
```

- *Type:* string

<p>The Day Of Month for scheduled refresh.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#day_of_month QuicksightRefreshSchedule#day_of_month}

---

##### `DayOfWeek`<sup>Optional</sup> <a name="DayOfWeek" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_refresh_schedule#day_of_week QuicksightRefreshSchedule#day_of_week}.

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightRefreshScheduleScheduleOutputReference <a name="QuicksightRefreshScheduleScheduleOutputReference" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency">PutScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetRefreshType">ResetRefreshType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleFrequency">ResetScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleId">ResetScheduleId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetStartAfterDateTime">ResetStartAfterDateTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScheduleFrequency` <a name="PutScheduleFrequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency"></a>

```csharp
private void PutScheduleFrequency(QuicksightRefreshScheduleScheduleScheduleFrequency Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.putScheduleFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

---

##### `ResetRefreshType` <a name="ResetRefreshType" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetRefreshType"></a>

```csharp
private void ResetRefreshType()
```

##### `ResetScheduleFrequency` <a name="ResetScheduleFrequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleFrequency"></a>

```csharp
private void ResetScheduleFrequency()
```

##### `ResetScheduleId` <a name="ResetScheduleId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetScheduleId"></a>

```csharp
private void ResetScheduleId()
```

##### `ResetStartAfterDateTime` <a name="ResetStartAfterDateTime" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.resetStartAfterDateTime"></a>

```csharp
private void ResetStartAfterDateTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency">ScheduleFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshTypeInput">RefreshTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequencyInput">ScheduleFrequencyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleIdInput">ScheduleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTimeInput">StartAfterDateTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshType">RefreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleId">ScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime">StartAfterDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequency"></a>

```csharp
public QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference ScheduleFrequency { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference</a>

---

##### `RefreshTypeInput`<sup>Optional</sup> <a name="RefreshTypeInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshTypeInput"></a>

```csharp
public string RefreshTypeInput { get; }
```

- *Type:* string

---

##### `ScheduleFrequencyInput`<sup>Optional</sup> <a name="ScheduleFrequencyInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleFrequencyInput"></a>

```csharp
public IResolvable|QuicksightRefreshScheduleScheduleScheduleFrequency ScheduleFrequencyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

---

##### `ScheduleIdInput`<sup>Optional</sup> <a name="ScheduleIdInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleIdInput"></a>

```csharp
public string ScheduleIdInput { get; }
```

- *Type:* string

---

##### `StartAfterDateTimeInput`<sup>Optional</sup> <a name="StartAfterDateTimeInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTimeInput"></a>

```csharp
public string StartAfterDateTimeInput { get; }
```

- *Type:* string

---

##### `RefreshType`<sup>Required</sup> <a name="RefreshType" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.refreshType"></a>

```csharp
public string RefreshType { get; }
```

- *Type:* string

---

##### `ScheduleId`<sup>Required</sup> <a name="ScheduleId" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.scheduleId"></a>

```csharp
public string ScheduleId { get; }
```

- *Type:* string

---

##### `StartAfterDateTime`<sup>Required</sup> <a name="StartAfterDateTime" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.startAfterDateTime"></a>

```csharp
public string StartAfterDateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightRefreshScheduleSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleSchedule">QuicksightRefreshScheduleSchedule</a>

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay">PutRefreshOnDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetRefreshOnDay">ResetRefreshOnDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeOfTheDay">ResetTimeOfTheDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefreshOnDay` <a name="PutRefreshOnDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay"></a>

```csharp
private void PutRefreshOnDay(QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.putRefreshOnDay.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---

##### `ResetInterval` <a name="ResetInterval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```

##### `ResetRefreshOnDay` <a name="ResetRefreshOnDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetRefreshOnDay"></a>

```csharp
private void ResetRefreshOnDay()
```

##### `ResetTimeOfTheDay` <a name="ResetTimeOfTheDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeOfTheDay"></a>

```csharp
private void ResetTimeOfTheDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay">RefreshOnDay</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDayInput">RefreshOnDayInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDayInput">TimeOfTheDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay">TimeOfTheDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefreshOnDay`<sup>Required</sup> <a name="RefreshOnDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDay"></a>

```csharp
public QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference RefreshOnDay { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference</a>

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `RefreshOnDayInput`<sup>Optional</sup> <a name="RefreshOnDayInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.refreshOnDayInput"></a>

```csharp
public IResolvable|QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay RefreshOnDayInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---

##### `TimeOfTheDayInput`<sup>Optional</sup> <a name="TimeOfTheDayInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDayInput"></a>

```csharp
public string TimeOfTheDayInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `TimeOfTheDay`<sup>Required</sup> <a name="TimeOfTheDay" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeOfTheDay"></a>

```csharp
public string TimeOfTheDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightRefreshScheduleScheduleScheduleFrequency InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequency">QuicksightRefreshScheduleScheduleScheduleFrequency</a>

---


### QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference <a name="QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfMonth">ResetDayOfMonth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfWeek">ResetDayOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDayOfMonth` <a name="ResetDayOfMonth" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfMonth"></a>

```csharp
private void ResetDayOfMonth()
```

##### `ResetDayOfWeek` <a name="ResetDayOfWeek" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.resetDayOfWeek"></a>

```csharp
private void ResetDayOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonthInput">DayOfMonthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth">DayOfMonth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfMonthInput`<sup>Optional</sup> <a name="DayOfMonthInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonthInput"></a>

```csharp
public string DayOfMonthInput { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `DayOfMonth`<sup>Required</sup> <a name="DayOfMonth" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfMonth"></a>

```csharp
public string DayOfMonth { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDayOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.quicksightRefreshSchedule.QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay">QuicksightRefreshScheduleScheduleScheduleFrequencyRefreshOnDay</a>

---



