# `batchSchedulingPolicy` Submodule <a name="`batchSchedulingPolicy` Submodule" id="@cdktn/provider-awscc.batchSchedulingPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BatchSchedulingPolicy <a name="BatchSchedulingPolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy awscc_batch_scheduling_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicy(Construct Scope, string Id, BatchSchedulingPolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig">BatchSchedulingPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy">PutFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy">PutQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy">ResetFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy">ResetQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFairsharePolicy` <a name="PutFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy"></a>

```csharp
private void PutFairsharePolicy(BatchSchedulingPolicyFairsharePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putFairsharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `PutQuotaSharePolicy` <a name="PutQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy"></a>

```csharp
private void PutQuotaSharePolicy(BatchSchedulingPolicyQuotaSharePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.putQuotaSharePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `ResetFairsharePolicy` <a name="ResetFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetFairsharePolicy"></a>

```csharp
private void ResetFairsharePolicy()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetQuotaSharePolicy` <a name="ResetQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetQuotaSharePolicy"></a>

```csharp
private void ResetQuotaSharePolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchSchedulingPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchSchedulingPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchSchedulingPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BatchSchedulingPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BatchSchedulingPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BatchSchedulingPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BatchSchedulingPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BatchSchedulingPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy">FairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy">QuotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput">FairsharePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput">QuotaSharePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `FairsharePolicy`<sup>Required</sup> <a name="FairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicy"></a>

```csharp
public BatchSchedulingPolicyFairsharePolicyOutputReference FairsharePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference">BatchSchedulingPolicyFairsharePolicyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `QuotaSharePolicy`<sup>Required</sup> <a name="QuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicy"></a>

```csharp
public BatchSchedulingPolicyQuotaSharePolicyOutputReference QuotaSharePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference">BatchSchedulingPolicyQuotaSharePolicyOutputReference</a>

---

##### `FairsharePolicyInput`<sup>Optional</sup> <a name="FairsharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.fairsharePolicyInput"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairsharePolicy FairsharePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `QuotaSharePolicyInput`<sup>Optional</sup> <a name="QuotaSharePolicyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.quotaSharePolicyInput"></a>

```csharp
public IResolvable|BatchSchedulingPolicyQuotaSharePolicy QuotaSharePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BatchSchedulingPolicyConfig <a name="BatchSchedulingPolicyConfig" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BatchSchedulingPolicyFairsharePolicy FairsharePolicy = null,
    string Name = null,
    BatchSchedulingPolicyQuotaSharePolicy QuotaSharePolicy = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy">FairsharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | Fair Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of Scheduling Policy. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy">QuotaSharePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | Quota Share Policy for the Job Queue. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FairsharePolicy`<sup>Optional</sup> <a name="FairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.fairsharePolicy"></a>

```csharp
public BatchSchedulingPolicyFairsharePolicy FairsharePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

Fair Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#fairshare_policy BatchSchedulingPolicy#fairshare_policy}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Scheduling Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#name BatchSchedulingPolicy#name}

---

##### `QuotaSharePolicy`<sup>Optional</sup> <a name="QuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.quotaSharePolicy"></a>

```csharp
public BatchSchedulingPolicyQuotaSharePolicy QuotaSharePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

Quota Share Policy for the Job Queue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#quota_share_policy BatchSchedulingPolicy#quota_share_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#tags BatchSchedulingPolicy#tags}

---

### BatchSchedulingPolicyFairsharePolicy <a name="BatchSchedulingPolicyFairsharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyFairsharePolicy {
    double ComputeReservation = null,
    double ShareDecaySeconds = null,
    IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution[] ShareDistribution = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution">ShareDistribution</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]</code> | List of Share Attributes. |

---

##### `ComputeReservation`<sup>Optional</sup> <a name="ComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#compute_reservation BatchSchedulingPolicy#compute_reservation}.

---

##### `ShareDecaySeconds`<sup>Optional</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#share_decay_seconds BatchSchedulingPolicy#share_decay_seconds}.

---

##### `ShareDistribution`<sup>Optional</sup> <a name="ShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy.property.shareDistribution"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution[] ShareDistribution { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

List of Share Attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#share_distribution BatchSchedulingPolicy#share_distribution}

---

### BatchSchedulingPolicyFairsharePolicyShareDistribution <a name="BatchSchedulingPolicyFairsharePolicyShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyFairsharePolicyShareDistribution {
    string ShareIdentifier = null,
    double WeightFactor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor">WeightFactor</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}. |

---

##### `ShareIdentifier`<sup>Optional</sup> <a name="ShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#share_identifier BatchSchedulingPolicy#share_identifier}.

---

##### `WeightFactor`<sup>Optional</sup> <a name="WeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution.property.weightFactor"></a>

```csharp
public double WeightFactor { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#weight_factor BatchSchedulingPolicy#weight_factor}.

---

### BatchSchedulingPolicyQuotaSharePolicy <a name="BatchSchedulingPolicyQuotaSharePolicy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyQuotaSharePolicy {
    string IdleResourceAssignmentStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy">IdleResourceAssignmentStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}. |

---

##### `IdleResourceAssignmentStrategy`<sup>Optional</sup> <a name="IdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy.property.idleResourceAssignmentStrategy"></a>

```csharp
public string IdleResourceAssignmentStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/batch_scheduling_policy#idle_resource_assignment_strategy BatchSchedulingPolicy#idle_resource_assignment_strategy}.

---

## Classes <a name="Classes" id="Classes"></a>

### BatchSchedulingPolicyFairsharePolicyOutputReference <a name="BatchSchedulingPolicyFairsharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyFairsharePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution">PutShareDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation">ResetComputeReservation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds">ResetShareDecaySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution">ResetShareDistribution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutShareDistribution` <a name="PutShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution"></a>

```csharp
private void PutShareDistribution(IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.putShareDistribution.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

---

##### `ResetComputeReservation` <a name="ResetComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetComputeReservation"></a>

```csharp
private void ResetComputeReservation()
```

##### `ResetShareDecaySeconds` <a name="ResetShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDecaySeconds"></a>

```csharp
private void ResetShareDecaySeconds()
```

##### `ResetShareDistribution` <a name="ResetShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.resetShareDistribution"></a>

```csharp
private void ResetShareDistribution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution">ShareDistribution</a></code> | <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput">ComputeReservationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput">ShareDecaySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput">ShareDistributionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation">ComputeReservation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds">ShareDecaySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareDistribution`<sup>Required</sup> <a name="ShareDistribution" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistribution"></a>

```csharp
public BatchSchedulingPolicyFairsharePolicyShareDistributionList ShareDistribution { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList">BatchSchedulingPolicyFairsharePolicyShareDistributionList</a>

---

##### `ComputeReservationInput`<sup>Optional</sup> <a name="ComputeReservationInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservationInput"></a>

```csharp
public double ComputeReservationInput { get; }
```

- *Type:* double

---

##### `ShareDecaySecondsInput`<sup>Optional</sup> <a name="ShareDecaySecondsInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySecondsInput"></a>

```csharp
public double ShareDecaySecondsInput { get; }
```

- *Type:* double

---

##### `ShareDistributionInput`<sup>Optional</sup> <a name="ShareDistributionInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDistributionInput"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution[] ShareDistributionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

---

##### `ComputeReservation`<sup>Required</sup> <a name="ComputeReservation" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.computeReservation"></a>

```csharp
public double ComputeReservation { get; }
```

- *Type:* double

---

##### `ShareDecaySeconds`<sup>Required</sup> <a name="ShareDecaySeconds" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.shareDecaySeconds"></a>

```csharp
public double ShareDecaySeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairsharePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicy">BatchSchedulingPolicyFairsharePolicy</a>

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionList <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionList" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyFairsharePolicyShareDistributionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get"></a>

```csharp
private BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionList.property.internalValue"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>[]

---


### BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference <a name="BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier">ResetShareIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor">ResetWeightFactor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetShareIdentifier` <a name="ResetShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetShareIdentifier"></a>

```csharp
private void ResetShareIdentifier()
```

##### `ResetWeightFactor` <a name="ResetWeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.resetWeightFactor"></a>

```csharp
private void ResetWeightFactor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput">ShareIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput">WeightFactorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier">ShareIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor">WeightFactor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ShareIdentifierInput`<sup>Optional</sup> <a name="ShareIdentifierInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifierInput"></a>

```csharp
public string ShareIdentifierInput { get; }
```

- *Type:* string

---

##### `WeightFactorInput`<sup>Optional</sup> <a name="WeightFactorInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactorInput"></a>

```csharp
public double WeightFactorInput { get; }
```

- *Type:* double

---

##### `ShareIdentifier`<sup>Required</sup> <a name="ShareIdentifier" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.shareIdentifier"></a>

```csharp
public string ShareIdentifier { get; }
```

- *Type:* string

---

##### `WeightFactor`<sup>Required</sup> <a name="WeightFactor" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.weightFactor"></a>

```csharp
public double WeightFactor { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistributionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchSchedulingPolicyFairsharePolicyShareDistribution InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyFairsharePolicyShareDistribution">BatchSchedulingPolicyFairsharePolicyShareDistribution</a>

---


### BatchSchedulingPolicyQuotaSharePolicyOutputReference <a name="BatchSchedulingPolicyQuotaSharePolicyOutputReference" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BatchSchedulingPolicyQuotaSharePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy">ResetIdleResourceAssignmentStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleResourceAssignmentStrategy` <a name="ResetIdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.resetIdleResourceAssignmentStrategy"></a>

```csharp
private void ResetIdleResourceAssignmentStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput">IdleResourceAssignmentStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy">IdleResourceAssignmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleResourceAssignmentStrategyInput`<sup>Optional</sup> <a name="IdleResourceAssignmentStrategyInput" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategyInput"></a>

```csharp
public string IdleResourceAssignmentStrategyInput { get; }
```

- *Type:* string

---

##### `IdleResourceAssignmentStrategy`<sup>Required</sup> <a name="IdleResourceAssignmentStrategy" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.idleResourceAssignmentStrategy"></a>

```csharp
public string IdleResourceAssignmentStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BatchSchedulingPolicyQuotaSharePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.batchSchedulingPolicy.BatchSchedulingPolicyQuotaSharePolicy">BatchSchedulingPolicyQuotaSharePolicy</a>

---



