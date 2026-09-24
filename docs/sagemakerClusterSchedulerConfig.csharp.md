# `sagemakerClusterSchedulerConfig` Submodule <a name="`sagemakerClusterSchedulerConfig` Submodule" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerClusterSchedulerConfig <a name="SagemakerClusterSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config awscc_sagemaker_cluster_scheduler_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfig(Construct Scope, string Id, SagemakerClusterSchedulerConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig">SagemakerClusterSchedulerConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig">SagemakerClusterSchedulerConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig">PutSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedulerConfig` <a name="PutSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig"></a>

```csharp
private void PutSchedulerConfig(SagemakerClusterSchedulerConfigSchedulerConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putSchedulerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags"></a>

```csharp
private void PutTags(IResolvable|SagemakerClusterSchedulerConfigTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerClusterSchedulerConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerClusterSchedulerConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerClusterSchedulerConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SagemakerClusterSchedulerConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SagemakerClusterSchedulerConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerClusterSchedulerConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerClusterSchedulerConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerClusterSchedulerConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn">ClusterSchedulerConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId">ClusterSchedulerConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion">ClusterSchedulerConfigVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig">SchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput">SchedulerConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterSchedulerConfigArn`<sup>Required</sup> <a name="ClusterSchedulerConfigArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigArn"></a>

```csharp
public string ClusterSchedulerConfigArn { get; }
```

- *Type:* string

---

##### `ClusterSchedulerConfigId`<sup>Required</sup> <a name="ClusterSchedulerConfigId" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigId"></a>

```csharp
public string ClusterSchedulerConfigId { get; }
```

- *Type:* string

---

##### `ClusterSchedulerConfigVersion`<sup>Required</sup> <a name="ClusterSchedulerConfigVersion" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterSchedulerConfigVersion"></a>

```csharp
public double ClusterSchedulerConfigVersion { get; }
```

- *Type:* double

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SchedulerConfig`<sup>Required</sup> <a name="SchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfig"></a>

```csharp
public SagemakerClusterSchedulerConfigSchedulerConfigOutputReference SchedulerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference">SagemakerClusterSchedulerConfigSchedulerConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tags"></a>

```csharp
public SagemakerClusterSchedulerConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList">SagemakerClusterSchedulerConfigTagsList</a>

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchedulerConfigInput`<sup>Optional</sup> <a name="SchedulerConfigInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.schedulerConfigInput"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfig SchedulerConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tagsInput"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerClusterSchedulerConfigConfig <a name="SagemakerClusterSchedulerConfigConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterArn,
    string Name,
    SagemakerClusterSchedulerConfigSchedulerConfig SchedulerConfig,
    string Description = null,
    IResolvable|SagemakerClusterSchedulerConfigTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn">ClusterArn</a></code> | <code>string</code> | ARN of the cluster. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name">Name</a></code> | <code>string</code> | Name for the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig">SchedulerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | Cluster policy configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description">Description</a></code> | <code>string</code> | Description of the cluster policy. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]</code> | Tags of the cluster policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

ARN of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#cluster_arn SagemakerClusterSchedulerConfig#cluster_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name for the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `SchedulerConfig`<sup>Required</sup> <a name="SchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.schedulerConfig"></a>

```csharp
public SagemakerClusterSchedulerConfigSchedulerConfig SchedulerConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

Cluster policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#scheduler_config SagemakerClusterSchedulerConfig#scheduler_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#description SagemakerClusterSchedulerConfig#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigConfig.property.tags"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

Tags of the cluster policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#tags SagemakerClusterSchedulerConfig#tags}

---

### SagemakerClusterSchedulerConfigSchedulerConfig <a name="SagemakerClusterSchedulerConfigSchedulerConfig" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigSchedulerConfig {
    string FairShare = null,
    string IdleResourceSharing = null,
    IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] PriorityClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare">FairShare</a></code> | <code>string</code> | When enabled, entities borrow idle compute based on assigned FairShareWeight. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing">IdleResourceSharing</a></code> | <code>string</code> | Configuration for sharing idle compute resources across entities. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses">PriorityClasses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]</code> | List of priority class configurations. |

---

##### `FairShare`<sup>Optional</sup> <a name="FairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.fairShare"></a>

```csharp
public string FairShare { get; set; }
```

- *Type:* string

When enabled, entities borrow idle compute based on assigned FairShareWeight.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#fair_share SagemakerClusterSchedulerConfig#fair_share}

---

##### `IdleResourceSharing`<sup>Optional</sup> <a name="IdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.idleResourceSharing"></a>

```csharp
public string IdleResourceSharing { get; set; }
```

- *Type:* string

Configuration for sharing idle compute resources across entities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#idle_resource_sharing SagemakerClusterSchedulerConfig#idle_resource_sharing}

---

##### `PriorityClasses`<sup>Optional</sup> <a name="PriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig.property.priorityClasses"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] PriorityClasses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

List of priority class configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#priority_classes SagemakerClusterSchedulerConfig#priority_classes}

---

### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses {
    string Name = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name">Name</a></code> | <code>string</code> | Name of the priority class. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight">Weight</a></code> | <code>double</code> | Weight of the priority class. Range 0-100, default 0. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the priority class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#name SagemakerClusterSchedulerConfig#name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Weight of the priority class. Range 0-100, default 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#weight SagemakerClusterSchedulerConfig#weight}

---

### SagemakerClusterSchedulerConfigTags <a name="SagemakerClusterSchedulerConfigTags" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#key SagemakerClusterSchedulerConfig#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/sagemaker_cluster_scheduler_config#value SagemakerClusterSchedulerConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerClusterSchedulerConfigSchedulerConfigOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigSchedulerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses">PutPriorityClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare">ResetFairShare</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing">ResetIdleResourceSharing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses">ResetPriorityClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPriorityClasses` <a name="PutPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses"></a>

```csharp
private void PutPriorityClasses(IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.putPriorityClasses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

---

##### `ResetFairShare` <a name="ResetFairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetFairShare"></a>

```csharp
private void ResetFairShare()
```

##### `ResetIdleResourceSharing` <a name="ResetIdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetIdleResourceSharing"></a>

```csharp
private void ResetIdleResourceSharing()
```

##### `ResetPriorityClasses` <a name="ResetPriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.resetPriorityClasses"></a>

```csharp
private void ResetPriorityClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses">PriorityClasses</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput">FairShareInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput">IdleResourceSharingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput">PriorityClassesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare">FairShare</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing">IdleResourceSharing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PriorityClasses`<sup>Required</sup> <a name="PriorityClasses" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClasses"></a>

```csharp
public SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList PriorityClasses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList</a>

---

##### `FairShareInput`<sup>Optional</sup> <a name="FairShareInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShareInput"></a>

```csharp
public string FairShareInput { get; }
```

- *Type:* string

---

##### `IdleResourceSharingInput`<sup>Optional</sup> <a name="IdleResourceSharingInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharingInput"></a>

```csharp
public string IdleResourceSharingInput { get; }
```

- *Type:* string

---

##### `PriorityClassesInput`<sup>Optional</sup> <a name="PriorityClassesInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.priorityClassesInput"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] PriorityClassesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

---

##### `FairShare`<sup>Required</sup> <a name="FairShare" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.fairShare"></a>

```csharp
public string FairShare { get; }
```

- *Type:* string

---

##### `IdleResourceSharing`<sup>Required</sup> <a name="IdleResourceSharing" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.idleResourceSharing"></a>

```csharp
public string IdleResourceSharing { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfig">SagemakerClusterSchedulerConfigSchedulerConfig</a>

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get"></a>

```csharp
private SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>[]

---


### SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference <a name="SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses">SagemakerClusterSchedulerConfigSchedulerConfigPriorityClasses</a>

---


### SagemakerClusterSchedulerConfigTagsList <a name="SagemakerClusterSchedulerConfigTagsList" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get"></a>

```csharp
private SagemakerClusterSchedulerConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsList.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>[]

---


### SagemakerClusterSchedulerConfigTagsOutputReference <a name="SagemakerClusterSchedulerConfigTagsOutputReference" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SagemakerClusterSchedulerConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SagemakerClusterSchedulerConfigTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.sagemakerClusterSchedulerConfig.SagemakerClusterSchedulerConfigTags">SagemakerClusterSchedulerConfigTags</a>

---



