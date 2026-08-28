# `ssmMaintenanceWindowTarget` Submodule <a name="`ssmMaintenanceWindowTarget` Submodule" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmMaintenanceWindowTarget <a name="SsmMaintenanceWindowTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target awscc_ssm_maintenance_window_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmMaintenanceWindowTarget(Construct Scope, string Id, SsmMaintenanceWindowTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig">SsmMaintenanceWindowTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig">SsmMaintenanceWindowTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOwnerInformation">ResetOwnerInformation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets"></a>

```csharp
private void PutTargets(IResolvable|SsmMaintenanceWindowTargetTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwnerInformation` <a name="ResetOwnerInformation" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.resetOwnerInformation"></a>

```csharp
private void ResetOwnerInformation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmMaintenanceWindowTarget resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmMaintenanceWindowTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmMaintenanceWindowTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmMaintenanceWindowTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmMaintenanceWindowTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmMaintenanceWindowTarget resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmMaintenanceWindowTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmMaintenanceWindowTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmMaintenanceWindowTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList">SsmMaintenanceWindowTargetTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowTargetId">WindowTargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformationInput">OwnerInformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowIdInput">WindowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformation">OwnerInformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowId">WindowId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targets"></a>

```csharp
public SsmMaintenanceWindowTargetTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList">SsmMaintenanceWindowTargetTargetsList</a>

---

##### `WindowTargetId`<sup>Required</sup> <a name="WindowTargetId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowTargetId"></a>

```csharp
public string WindowTargetId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInformationInput`<sup>Optional</sup> <a name="OwnerInformationInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformationInput"></a>

```csharp
public string OwnerInformationInput { get; }
```

- *Type:* string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.targetsInput"></a>

```csharp
public IResolvable|SsmMaintenanceWindowTargetTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

---

##### `WindowIdInput`<sup>Optional</sup> <a name="WindowIdInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowIdInput"></a>

```csharp
public string WindowIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OwnerInformation`<sup>Required</sup> <a name="OwnerInformation" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.ownerInformation"></a>

```csharp
public string OwnerInformation { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `WindowId`<sup>Required</sup> <a name="WindowId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.windowId"></a>

```csharp
public string WindowId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmMaintenanceWindowTargetConfig <a name="SsmMaintenanceWindowTargetConfig" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmMaintenanceWindowTargetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ResourceType,
    IResolvable|SsmMaintenanceWindowTargetTargets[] Targets,
    string WindowId,
    string Description = null,
    string Name = null,
    string OwnerInformation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.resourceType">ResourceType</a></code> | <code>string</code> | The type of target that is being registered with the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]</code> | The targets to register with the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.windowId">WindowId</a></code> | <code>string</code> | The ID of the maintenance window to register the target with. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.description">Description</a></code> | <code>string</code> | A description for the target. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.name">Name</a></code> | <code>string</code> | The name for the maintenance window target. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.ownerInformation">OwnerInformation</a></code> | <code>string</code> | A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

The type of target that is being registered with the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#resource_type SsmMaintenanceWindowTarget#resource_type}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.targets"></a>

```csharp
public IResolvable|SsmMaintenanceWindowTargetTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

The targets to register with the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#targets SsmMaintenanceWindowTarget#targets}

---

##### `WindowId`<sup>Required</sup> <a name="WindowId" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.windowId"></a>

```csharp
public string WindowId { get; set; }
```

- *Type:* string

The ID of the maintenance window to register the target with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#window_id SsmMaintenanceWindowTarget#window_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#description SsmMaintenanceWindowTarget#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name for the maintenance window target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#name SsmMaintenanceWindowTarget#name}

---

##### `OwnerInformation`<sup>Optional</sup> <a name="OwnerInformation" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetConfig.property.ownerInformation"></a>

```csharp
public string OwnerInformation { get; set; }
```

- *Type:* string

A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#owner_information SsmMaintenanceWindowTarget#owner_information}

---

### SsmMaintenanceWindowTargetTargets <a name="SsmMaintenanceWindowTargetTargets" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmMaintenanceWindowTargetTargets {
    string Key,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.key">Key</a></code> | <code>string</code> | User-defined criteria for sending commands that target managed nodes that meet the criteria. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.values">Values</a></code> | <code>string[]</code> | User-defined criteria that maps to Key. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

User-defined criteria for sending commands that target managed nodes that meet the criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#key SsmMaintenanceWindowTarget#key}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

User-defined criteria that maps to Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_maintenance_window_target#values SsmMaintenanceWindowTarget#values}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmMaintenanceWindowTargetTargetsList <a name="SsmMaintenanceWindowTargetTargetsList" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmMaintenanceWindowTargetTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get"></a>

```csharp
private SsmMaintenanceWindowTargetTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsList.property.internalValue"></a>

```csharp
public IResolvable|SsmMaintenanceWindowTargetTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>[]

---


### SsmMaintenanceWindowTargetTargetsOutputReference <a name="SsmMaintenanceWindowTargetTargetsOutputReference" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmMaintenanceWindowTargetTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmMaintenanceWindowTargetTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmMaintenanceWindowTarget.SsmMaintenanceWindowTargetTargets">SsmMaintenanceWindowTargetTargets</a>

---



