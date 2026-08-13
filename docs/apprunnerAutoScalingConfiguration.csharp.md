# `apprunnerAutoScalingConfiguration` Submodule <a name="`apprunnerAutoScalingConfiguration` Submodule" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerAutoScalingConfiguration <a name="ApprunnerAutoScalingConfiguration" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration awscc_apprunner_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerAutoScalingConfiguration(Construct Scope, string Id, ApprunnerAutoScalingConfigurationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig">ApprunnerAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig">ApprunnerAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName">ResetAutoScalingConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|ApprunnerAutoScalingConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

---

##### `ResetAutoScalingConfigurationName` <a name="ResetAutoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetAutoScalingConfigurationName"></a>

```csharp
private void ResetAutoScalingConfigurationName()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxConcurrency"></a>

```csharp
private void ResetMaxConcurrency()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerAutoScalingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerAutoScalingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerAutoScalingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApprunnerAutoScalingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApprunnerAutoScalingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApprunnerAutoScalingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApprunnerAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn">AutoScalingConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision">AutoScalingConfigurationRevision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest">Latest</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput">AutoScalingConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName">AutoScalingConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoScalingConfigurationArn`<sup>Required</sup> <a name="AutoScalingConfigurationArn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationArn"></a>

```csharp
public string AutoScalingConfigurationArn { get; }
```

- *Type:* string

---

##### `AutoScalingConfigurationRevision`<sup>Required</sup> <a name="AutoScalingConfigurationRevision" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationRevision"></a>

```csharp
public double AutoScalingConfigurationRevision { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.latest"></a>

```csharp
public IResolvable Latest { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tags"></a>

```csharp
public ApprunnerAutoScalingConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList">ApprunnerAutoScalingConfigurationTagsList</a>

---

##### `AutoScalingConfigurationNameInput`<sup>Optional</sup> <a name="AutoScalingConfigurationNameInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationNameInput"></a>

```csharp
public string AutoScalingConfigurationNameInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrencyInput"></a>

```csharp
public double MaxConcurrencyInput { get; }
```

- *Type:* double

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|ApprunnerAutoScalingConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

---

##### `AutoScalingConfigurationName`<sup>Required</sup> <a name="AutoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.autoScalingConfigurationName"></a>

```csharp
public string AutoScalingConfigurationName { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerAutoScalingConfigurationConfig <a name="ApprunnerAutoScalingConfigurationConfig" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerAutoScalingConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AutoScalingConfigurationName = null,
    double MaxConcurrency = null,
    double MaxSize = null,
    double MinSize = null,
    IResolvable|ApprunnerAutoScalingConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName">AutoScalingConfigurationName</a></code> | <code>string</code> | The customer-provided auto scaling configuration name. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | The maximum number of concurrent requests that an instance processes. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | The maximum number of instances that an App Runner service scales up to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize">MinSize</a></code> | <code>double</code> | The minimum number of instances that App Runner provisions for a service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]</code> | A list of metadata items that you can associate with your auto scaling configuration resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AutoScalingConfigurationName`<sup>Optional</sup> <a name="AutoScalingConfigurationName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.autoScalingConfigurationName"></a>

```csharp
public string AutoScalingConfigurationName { get; set; }
```

- *Type:* string

The customer-provided auto scaling configuration name.

When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#auto_scaling_configuration_name ApprunnerAutoScalingConfiguration#auto_scaling_configuration_name}

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; set; }
```

- *Type:* double

The maximum number of concurrent requests that an instance processes.

If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#max_concurrency ApprunnerAutoScalingConfiguration#max_concurrency}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

The maximum number of instances that an App Runner service scales up to.

At most MaxSize instances actively serve traffic for your service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#max_size ApprunnerAutoScalingConfiguration#max_size}

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

The minimum number of instances that App Runner provisions for a service.

The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#min_size ApprunnerAutoScalingConfiguration#min_size}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|ApprunnerAutoScalingConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

A list of metadata items that you can associate with your auto scaling configuration resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#tags ApprunnerAutoScalingConfiguration#tags}

---

### ApprunnerAutoScalingConfigurationTags <a name="ApprunnerAutoScalingConfigurationTags" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerAutoScalingConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#key ApprunnerAutoScalingConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apprunner_auto_scaling_configuration#value ApprunnerAutoScalingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerAutoScalingConfigurationTagsList <a name="ApprunnerAutoScalingConfigurationTagsList" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerAutoScalingConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get"></a>

```csharp
private ApprunnerAutoScalingConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerAutoScalingConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>[]

---


### ApprunnerAutoScalingConfigurationTagsOutputReference <a name="ApprunnerAutoScalingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApprunnerAutoScalingConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApprunnerAutoScalingConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apprunnerAutoScalingConfiguration.ApprunnerAutoScalingConfigurationTags">ApprunnerAutoScalingConfigurationTags</a>

---



