# `robomakerRobotApplication` Submodule <a name="`robomakerRobotApplication` Submodule" id="@cdktn/provider-awscc.robomakerRobotApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerRobotApplication <a name="RobomakerRobotApplication" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application awscc_robomaker_robot_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplication(Construct Scope, string Id, RobomakerRobotApplicationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig">RobomakerRobotApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig">RobomakerRobotApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite">PutRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId">ResetCurrentRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRobotSoftwareSuite` <a name="PutRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite"></a>

```csharp
private void PutRobotSoftwareSuite(RobomakerRobotApplicationRobotSoftwareSuite Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources"></a>

```csharp
private void PutSources(IResolvable|RobomakerRobotApplicationSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]

---

##### `ResetCurrentRevisionId` <a name="ResetCurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId"></a>

```csharp
private void ResetCurrentRevisionId()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources"></a>

```csharp
private void ResetSources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerRobotApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerRobotApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerRobotApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RobomakerRobotApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RobomakerRobotApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RobomakerRobotApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerRobotApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite">RobotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput">CurrentRevisionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput">RobotSoftwareSuiteInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput">SourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId">CurrentRevisionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RobotSoftwareSuite`<sup>Required</sup> <a name="RobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite"></a>

```csharp
public RobomakerRobotApplicationRobotSoftwareSuiteOutputReference RobotSoftwareSuite { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources"></a>

```csharp
public RobomakerRobotApplicationSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a>

---

##### `CurrentRevisionIdInput`<sup>Optional</sup> <a name="CurrentRevisionIdInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput"></a>

```csharp
public string CurrentRevisionIdInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RobotSoftwareSuiteInput`<sup>Optional</sup> <a name="RobotSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput"></a>

```csharp
public IResolvable|RobomakerRobotApplicationRobotSoftwareSuite RobotSoftwareSuiteInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput"></a>

```csharp
public IResolvable|RobomakerRobotApplicationSources[] SourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CurrentRevisionId`<sup>Required</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId"></a>

```csharp
public string CurrentRevisionId { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerRobotApplicationConfig <a name="RobomakerRobotApplicationConfig" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplicationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    RobomakerRobotApplicationRobotSoftwareSuite RobotSoftwareSuite,
    string CurrentRevisionId = null,
    string Environment = null,
    string Name = null,
    IResolvable|RobomakerRobotApplicationSources[] Sources = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite">RobotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId">CurrentRevisionId</a></code> | <code>string</code> | The revision ID of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment">Environment</a></code> | <code>string</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name">Name</a></code> | <code>string</code> | The name of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources">Sources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]</code> | The sources of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RobotSoftwareSuite`<sup>Required</sup> <a name="RobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite"></a>

```csharp
public RobomakerRobotApplicationRobotSoftwareSuite RobotSoftwareSuite { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

The robot software suite used by the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#robot_software_suite RobomakerRobotApplication#robot_software_suite}

---

##### `CurrentRevisionId`<sup>Optional</sup> <a name="CurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId"></a>

```csharp
public string CurrentRevisionId { get; set; }
```

- *Type:* string

The revision ID of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#current_revision_id RobomakerRobotApplication#current_revision_id}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#environment RobomakerRobotApplication#environment}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources"></a>

```csharp
public IResolvable|RobomakerRobotApplicationSources[] Sources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]

The sources of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#sources RobomakerRobotApplication#sources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#tags RobomakerRobotApplication#tags}

---

### RobomakerRobotApplicationRobotSoftwareSuite <a name="RobomakerRobotApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplicationRobotSoftwareSuite {
    string Name,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name">Name</a></code> | <code>string</code> | The name of robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version">Version</a></code> | <code>string</code> | The version of robot software suite. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The version of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#version RobomakerRobotApplication#version}

---

### RobomakerRobotApplicationSources <a name="RobomakerRobotApplicationSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplicationSources {
    string Architecture = null,
    string S3Bucket = null,
    string S3Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture">Architecture</a></code> | <code>string</code> | The architecture of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | The Arn of the S3Bucket that stores the robot application source. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key">S3Key</a></code> | <code>string</code> | The s3 key of robot application source. |

---

##### `Architecture`<sup>Optional</sup> <a name="Architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture"></a>

```csharp
public string Architecture { get; set; }
```

- *Type:* string

The architecture of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#architecture RobomakerRobotApplication#architecture}

---

##### `S3Bucket`<sup>Optional</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; set; }
```

- *Type:* string

The Arn of the S3Bucket that stores the robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#s3_bucket RobomakerRobotApplication#s3_bucket}

---

##### `S3Key`<sup>Optional</sup> <a name="S3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key"></a>

```csharp
public string S3Key { get; set; }
```

- *Type:* string

The s3 key of robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#s3_key RobomakerRobotApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerRobotApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerRobotApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplicationRobotSoftwareSuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RobomakerRobotApplicationRobotSoftwareSuite InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---


### RobomakerRobotApplicationSourcesList <a name="RobomakerRobotApplicationSourcesList" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplicationSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get"></a>

```csharp
private RobomakerRobotApplicationSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue"></a>

```csharp
public IResolvable|RobomakerRobotApplicationSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>[]

---


### RobomakerRobotApplicationSourcesOutputReference <a name="RobomakerRobotApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RobomakerRobotApplicationSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture">ResetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket">ResetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key">ResetS3Key</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArchitecture` <a name="ResetArchitecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture"></a>

```csharp
private void ResetArchitecture()
```

##### `ResetS3Bucket` <a name="ResetS3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket"></a>

```csharp
private void ResetS3Bucket()
```

##### `ResetS3Key` <a name="ResetS3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key"></a>

```csharp
private void ResetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput">ArchitectureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput">S3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture">Architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key">S3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArchitectureInput`<sup>Optional</sup> <a name="ArchitectureInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput"></a>

```csharp
public string ArchitectureInput { get; }
```

- *Type:* string

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput"></a>

```csharp
public string S3BucketInput { get; }
```

- *Type:* string

---

##### `S3KeyInput`<sup>Optional</sup> <a name="S3KeyInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput"></a>

```csharp
public string S3KeyInput { get; }
```

- *Type:* string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture"></a>

```csharp
public string Architecture { get; }
```

- *Type:* string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket"></a>

```csharp
public string S3Bucket { get; }
```

- *Type:* string

---

##### `S3Key`<sup>Required</sup> <a name="S3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key"></a>

```csharp
public string S3Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RobomakerRobotApplicationSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>

---



