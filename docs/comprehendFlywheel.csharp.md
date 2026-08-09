# `comprehendFlywheel` Submodule <a name="`comprehendFlywheel` Submodule" id="@cdktn/provider-awscc.comprehendFlywheel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendFlywheel <a name="ComprehendFlywheel" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel awscc_comprehend_flywheel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheel(Construct Scope, string Id, ComprehendFlywheelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig">ComprehendFlywheelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig">ComprehendFlywheelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig">PutDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig">PutTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn">ResetActiveModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig">ResetDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType">ResetModelType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig">ResetTaskConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataSecurityConfig` <a name="PutDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig"></a>

```csharp
private void PutDataSecurityConfig(ComprehendFlywheelDataSecurityConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putDataSecurityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags"></a>

```csharp
private void PutTags(IResolvable|ComprehendFlywheelTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

---

##### `PutTaskConfig` <a name="PutTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig"></a>

```csharp
private void PutTaskConfig(ComprehendFlywheelTaskConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.putTaskConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `ResetActiveModelArn` <a name="ResetActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetActiveModelArn"></a>

```csharp
private void ResetActiveModelArn()
```

##### `ResetDataSecurityConfig` <a name="ResetDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetDataSecurityConfig"></a>

```csharp
private void ResetDataSecurityConfig()
```

##### `ResetModelType` <a name="ResetModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetModelType"></a>

```csharp
private void ResetModelType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaskConfig` <a name="ResetTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.resetTaskConfig"></a>

```csharp
private void ResetTaskConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendFlywheel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendFlywheel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendFlywheel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ComprehendFlywheel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ComprehendFlywheel resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComprehendFlywheel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComprehendFlywheel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendFlywheel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig">DataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig">TaskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput">ActiveModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput">DataLakeS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput">DataSecurityConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput">FlywheelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput">ModelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput">TaskConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn">ActiveModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri">DataLakeS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName">FlywheelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType">ModelType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DataSecurityConfig`<sup>Required</sup> <a name="DataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfig"></a>

```csharp
public ComprehendFlywheelDataSecurityConfigOutputReference DataSecurityConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference">ComprehendFlywheelDataSecurityConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tags"></a>

```csharp
public ComprehendFlywheelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList">ComprehendFlywheelTagsList</a>

---

##### `TaskConfig`<sup>Required</sup> <a name="TaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfig"></a>

```csharp
public ComprehendFlywheelTaskConfigOutputReference TaskConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference">ComprehendFlywheelTaskConfigOutputReference</a>

---

##### `ActiveModelArnInput`<sup>Optional</sup> <a name="ActiveModelArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArnInput"></a>

```csharp
public string ActiveModelArnInput { get; }
```

- *Type:* string

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArnInput"></a>

```csharp
public string DataAccessRoleArnInput { get; }
```

- *Type:* string

---

##### `DataLakeS3UriInput`<sup>Optional</sup> <a name="DataLakeS3UriInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3UriInput"></a>

```csharp
public string DataLakeS3UriInput { get; }
```

- *Type:* string

---

##### `DataSecurityConfigInput`<sup>Optional</sup> <a name="DataSecurityConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataSecurityConfigInput"></a>

```csharp
public IResolvable|ComprehendFlywheelDataSecurityConfig DataSecurityConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---

##### `FlywheelNameInput`<sup>Optional</sup> <a name="FlywheelNameInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelNameInput"></a>

```csharp
public string FlywheelNameInput { get; }
```

- *Type:* string

---

##### `ModelTypeInput`<sup>Optional</sup> <a name="ModelTypeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelTypeInput"></a>

```csharp
public string ModelTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tagsInput"></a>

```csharp
public IResolvable|ComprehendFlywheelTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

---

##### `TaskConfigInput`<sup>Optional</sup> <a name="TaskConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.taskConfigInput"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfig TaskConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---

##### `ActiveModelArn`<sup>Required</sup> <a name="ActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.activeModelArn"></a>

```csharp
public string ActiveModelArn { get; }
```

- *Type:* string

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; }
```

- *Type:* string

---

##### `DataLakeS3Uri`<sup>Required</sup> <a name="DataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.dataLakeS3Uri"></a>

```csharp
public string DataLakeS3Uri { get; }
```

- *Type:* string

---

##### `FlywheelName`<sup>Required</sup> <a name="FlywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.flywheelName"></a>

```csharp
public string FlywheelName { get; }
```

- *Type:* string

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.modelType"></a>

```csharp
public string ModelType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendFlywheelConfig <a name="ComprehendFlywheelConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataAccessRoleArn,
    string DataLakeS3Uri,
    string FlywheelName,
    string ActiveModelArn = null,
    ComprehendFlywheelDataSecurityConfig DataSecurityConfig = null,
    string ModelType = null,
    IResolvable|ComprehendFlywheelTags[] Tags = null,
    ComprehendFlywheelTaskConfig TaskConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri">DataLakeS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName">FlywheelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn">ActiveModelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig">DataSecurityConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType">ModelType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig">TaskConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataAccessRoleArn"></a>

```csharp
public string DataAccessRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_access_role_arn ComprehendFlywheel#data_access_role_arn}.

---

##### `DataLakeS3Uri`<sup>Required</sup> <a name="DataLakeS3Uri" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataLakeS3Uri"></a>

```csharp
public string DataLakeS3Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_s3_uri ComprehendFlywheel#data_lake_s3_uri}.

---

##### `FlywheelName`<sup>Required</sup> <a name="FlywheelName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.flywheelName"></a>

```csharp
public string FlywheelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#flywheel_name ComprehendFlywheel#flywheel_name}.

---

##### `ActiveModelArn`<sup>Optional</sup> <a name="ActiveModelArn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.activeModelArn"></a>

```csharp
public string ActiveModelArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#active_model_arn ComprehendFlywheel#active_model_arn}.

---

##### `DataSecurityConfig`<sup>Optional</sup> <a name="DataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.dataSecurityConfig"></a>

```csharp
public ComprehendFlywheelDataSecurityConfig DataSecurityConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_security_config ComprehendFlywheel#data_security_config}.

---

##### `ModelType`<sup>Optional</sup> <a name="ModelType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.modelType"></a>

```csharp
public string ModelType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_type ComprehendFlywheel#model_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.tags"></a>

```csharp
public IResolvable|ComprehendFlywheelTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#tags ComprehendFlywheel#tags}.

---

##### `TaskConfig`<sup>Optional</sup> <a name="TaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelConfig.property.taskConfig"></a>

```csharp
public ComprehendFlywheelTaskConfig TaskConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#task_config ComprehendFlywheel#task_config}.

---

### ComprehendFlywheelDataSecurityConfig <a name="ComprehendFlywheelDataSecurityConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelDataSecurityConfig {
    string DataLakeKmsKeyId = null,
    string ModelKmsKeyId = null,
    string VolumeKmsKeyId = null,
    ComprehendFlywheelDataSecurityConfigVpcConfig VpcConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId">DataLakeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}. |

---

##### `DataLakeKmsKeyId`<sup>Optional</sup> <a name="DataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.dataLakeKmsKeyId"></a>

```csharp
public string DataLakeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#data_lake_kms_key_id ComprehendFlywheel#data_lake_kms_key_id}.

---

##### `ModelKmsKeyId`<sup>Optional</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.modelKmsKeyId"></a>

```csharp
public string ModelKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#model_kms_key_id ComprehendFlywheel#model_kms_key_id}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#volume_kms_key_id ComprehendFlywheel#volume_kms_key_id}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig.property.vpcConfig"></a>

```csharp
public ComprehendFlywheelDataSecurityConfigVpcConfig VpcConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#vpc_config ComprehendFlywheel#vpc_config}.

---

### ComprehendFlywheelDataSecurityConfigVpcConfig <a name="ComprehendFlywheelDataSecurityConfigVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelDataSecurityConfigVpcConfig {
    string[] SecurityGroupIds = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#security_group_ids ComprehendFlywheel#security_group_ids}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#subnets ComprehendFlywheel#subnets}.

---

### ComprehendFlywheelTags <a name="ComprehendFlywheelTags" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#key ComprehendFlywheel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#value ComprehendFlywheel#value}.

---

### ComprehendFlywheelTaskConfig <a name="ComprehendFlywheelTaskConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfig {
    ComprehendFlywheelTaskConfigDocumentClassificationConfig DocumentClassificationConfig = null,
    ComprehendFlywheelTaskConfigEntityRecognitionConfig EntityRecognitionConfig = null,
    string LanguageCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig">DocumentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig">EntityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode">LanguageCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}. |

---

##### `DocumentClassificationConfig`<sup>Optional</sup> <a name="DocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.documentClassificationConfig"></a>

```csharp
public ComprehendFlywheelTaskConfigDocumentClassificationConfig DocumentClassificationConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#document_classification_config ComprehendFlywheel#document_classification_config}.

---

##### `EntityRecognitionConfig`<sup>Optional</sup> <a name="EntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.entityRecognitionConfig"></a>

```csharp
public ComprehendFlywheelTaskConfigEntityRecognitionConfig EntityRecognitionConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_recognition_config ComprehendFlywheel#entity_recognition_config}.

---

##### `LanguageCode`<sup>Optional</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig.property.languageCode"></a>

```csharp
public string LanguageCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#language_code ComprehendFlywheel#language_code}.

---

### ComprehendFlywheelTaskConfigDocumentClassificationConfig <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigDocumentClassificationConfig {
    string[] Labels = null,
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels">Labels</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}. |

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.labels"></a>

```csharp
public string[] Labels { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#labels ComprehendFlywheel#labels}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#mode ComprehendFlywheel#mode}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfig <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigEntityRecognitionConfig {
    IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] EntityTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes">EntityTypes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}. |

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig.property.entityTypes"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] EntityTypes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#entity_types ComprehendFlywheel#entity_types}.

---

### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/comprehend_flywheel#type ComprehendFlywheel#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendFlywheelDataSecurityConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelDataSecurityConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId">ResetDataLakeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId">ResetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig"></a>

```csharp
private void PutVpcConfig(ComprehendFlywheelDataSecurityConfigVpcConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `ResetDataLakeKmsKeyId` <a name="ResetDataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetDataLakeKmsKeyId"></a>

```csharp
private void ResetDataLakeKmsKeyId()
```

##### `ResetModelKmsKeyId` <a name="ResetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetModelKmsKeyId"></a>

```csharp
private void ResetModelKmsKeyId()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVolumeKmsKeyId"></a>

```csharp
private void ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.resetVpcConfig"></a>

```csharp
private void ResetVpcConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput">DataLakeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput">ModelKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput">VpcConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId">DataLakeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfig"></a>

```csharp
public ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference">ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference</a>

---

##### `DataLakeKmsKeyIdInput`<sup>Optional</sup> <a name="DataLakeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyIdInput"></a>

```csharp
public string DataLakeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ModelKmsKeyIdInput`<sup>Optional</sup> <a name="ModelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyIdInput"></a>

```csharp
public string ModelKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyIdInput"></a>

```csharp
public string VolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.vpcConfigInput"></a>

```csharp
public IResolvable|ComprehendFlywheelDataSecurityConfigVpcConfig VpcConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---

##### `DataLakeKmsKeyId`<sup>Required</sup> <a name="DataLakeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.dataLakeKmsKeyId"></a>

```csharp
public string DataLakeKmsKeyId { get; }
```

- *Type:* string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.modelKmsKeyId"></a>

```csharp
public string ModelKmsKeyId { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelDataSecurityConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfig">ComprehendFlywheelDataSecurityConfig</a>

---


### ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference <a name="ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelDataSecurityConfigVpcConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelDataSecurityConfigVpcConfig">ComprehendFlywheelDataSecurityConfigVpcConfig</a>

---


### ComprehendFlywheelTagsList <a name="ComprehendFlywheelTagsList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get"></a>

```csharp
private ComprehendFlywheelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsList.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>[]

---


### ComprehendFlywheelTagsOutputReference <a name="ComprehendFlywheelTagsOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTags">ComprehendFlywheelTags</a>

---


### ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference <a name="ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput">LabelsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels">Labels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labelsInput"></a>

```csharp
public string[] LabelsInput { get; }
```

- *Type:* string[]

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.labels"></a>

```csharp
public string[] Labels { get; }
```

- *Type:* string[]

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigDocumentClassificationConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get"></a>

```csharp
private ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>

---


### ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference <a name="ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes"></a>

```csharp
private void PutEntityTypes(IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

---

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.resetEntityTypes"></a>

```csharp
private void ResetEntityTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypes"></a>

```csharp
public ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList EntityTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypesList</a>

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.entityTypesInput"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes[] EntityTypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes">ComprehendFlywheelTaskConfigEntityRecognitionConfigEntityTypes</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---


### ComprehendFlywheelTaskConfigOutputReference <a name="ComprehendFlywheelTaskConfigOutputReference" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ComprehendFlywheelTaskConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig">PutDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig">PutEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig">ResetDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig">ResetEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode">ResetLanguageCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocumentClassificationConfig` <a name="PutDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig"></a>

```csharp
private void PutDocumentClassificationConfig(ComprehendFlywheelTaskConfigDocumentClassificationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putDocumentClassificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `PutEntityRecognitionConfig` <a name="PutEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig"></a>

```csharp
private void PutEntityRecognitionConfig(ComprehendFlywheelTaskConfigEntityRecognitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.putEntityRecognitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `ResetDocumentClassificationConfig` <a name="ResetDocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetDocumentClassificationConfig"></a>

```csharp
private void ResetDocumentClassificationConfig()
```

##### `ResetEntityRecognitionConfig` <a name="ResetEntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetEntityRecognitionConfig"></a>

```csharp
private void ResetEntityRecognitionConfig()
```

##### `ResetLanguageCode` <a name="ResetLanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.resetLanguageCode"></a>

```csharp
private void ResetLanguageCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig">DocumentClassificationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig">EntityRecognitionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput">DocumentClassificationConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput">EntityRecognitionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput">LanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode">LanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocumentClassificationConfig`<sup>Required</sup> <a name="DocumentClassificationConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfig"></a>

```csharp
public ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference DocumentClassificationConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference">ComprehendFlywheelTaskConfigDocumentClassificationConfigOutputReference</a>

---

##### `EntityRecognitionConfig`<sup>Required</sup> <a name="EntityRecognitionConfig" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfig"></a>

```csharp
public ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference EntityRecognitionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference">ComprehendFlywheelTaskConfigEntityRecognitionConfigOutputReference</a>

---

##### `DocumentClassificationConfigInput`<sup>Optional</sup> <a name="DocumentClassificationConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.documentClassificationConfigInput"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigDocumentClassificationConfig DocumentClassificationConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigDocumentClassificationConfig">ComprehendFlywheelTaskConfigDocumentClassificationConfig</a>

---

##### `EntityRecognitionConfigInput`<sup>Optional</sup> <a name="EntityRecognitionConfigInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.entityRecognitionConfigInput"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfigEntityRecognitionConfig EntityRecognitionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigEntityRecognitionConfig">ComprehendFlywheelTaskConfigEntityRecognitionConfig</a>

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCodeInput"></a>

```csharp
public string LanguageCodeInput { get; }
```

- *Type:* string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.languageCode"></a>

```csharp
public string LanguageCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ComprehendFlywheelTaskConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.comprehendFlywheel.ComprehendFlywheelTaskConfig">ComprehendFlywheelTaskConfig</a>

---



