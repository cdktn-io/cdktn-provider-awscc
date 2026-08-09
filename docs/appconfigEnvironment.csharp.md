# `appconfigEnvironment` Submodule <a name="`appconfigEnvironment` Submodule" id="@cdktn/provider-awscc.appconfigEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigEnvironment <a name="AppconfigEnvironment" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment awscc_appconfig_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironment(Construct Scope, string Id, AppconfigEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig">AppconfigEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putMonitors">PutMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDeletionProtectionCheck">ResetDeletionProtectionCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetMonitors">ResetMonitors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMonitors` <a name="PutMonitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putMonitors"></a>

```csharp
private void PutMonitors(IResolvable|AppconfigEnvironmentMonitors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putMonitors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putTags"></a>

```csharp
private void PutTags(IResolvable|AppconfigEnvironmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

---

##### `ResetDeletionProtectionCheck` <a name="ResetDeletionProtectionCheck" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDeletionProtectionCheck"></a>

```csharp
private void ResetDeletionProtectionCheck()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetMonitors` <a name="ResetMonitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetMonitors"></a>

```csharp
private void ResetMonitors()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigEnvironment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppconfigEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.environmentId">EnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitors">Monitors</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList">AppconfigEnvironmentMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList">AppconfigEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheckInput">DeletionProtectionCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitorsInput">MonitorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheck">DeletionProtectionCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.environmentId"></a>

```csharp
public string EnvironmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Monitors`<sup>Required</sup> <a name="Monitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitors"></a>

```csharp
public AppconfigEnvironmentMonitorsList Monitors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList">AppconfigEnvironmentMonitorsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tags"></a>

```csharp
public AppconfigEnvironmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList">AppconfigEnvironmentTagsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `DeletionProtectionCheckInput`<sup>Optional</sup> <a name="DeletionProtectionCheckInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheckInput"></a>

```csharp
public string DeletionProtectionCheckInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MonitorsInput`<sup>Optional</sup> <a name="MonitorsInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.monitorsInput"></a>

```csharp
public IResolvable|AppconfigEnvironmentMonitors[] MonitorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tagsInput"></a>

```csharp
public IResolvable|AppconfigEnvironmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `DeletionProtectionCheck`<sup>Required</sup> <a name="DeletionProtectionCheck" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.deletionProtectionCheck"></a>

```csharp
public string DeletionProtectionCheck { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigEnvironmentConfig <a name="AppconfigEnvironmentConfig" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationId,
    string Name,
    string DeletionProtectionCheck = null,
    string Description = null,
    IResolvable|AppconfigEnvironmentMonitors[] Monitors = null,
    IResolvable|AppconfigEnvironmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId">ApplicationId</a></code> | <code>string</code> | The application ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.name">Name</a></code> | <code>string</code> | A name for the environment. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.deletionProtectionCheck">DeletionProtectionCheck</a></code> | <code>string</code> | On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.description">Description</a></code> | <code>string</code> | A description of the environment. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitors">Monitors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]</code> | Amazon CloudWatch alarms to monitor during the deployment process. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]</code> | Metadata to assign to the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

The application ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#application_id AppconfigEnvironment#application_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#name AppconfigEnvironment#name}

---

##### `DeletionProtectionCheck`<sup>Optional</sup> <a name="DeletionProtectionCheck" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.deletionProtectionCheck"></a>

```csharp
public string DeletionProtectionCheck { get; set; }
```

- *Type:* string

On resource deletion this controls whether the Deletion Protection check should be applied, bypassed, or (the default) whether the behavior should be controlled by the account-level Deletion Protection setting.

See https://docs.aws.amazon.com/appconfig/latest/userguide/deletion-protection.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#deletion_protection_check AppconfigEnvironment#deletion_protection_check}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#description AppconfigEnvironment#description}

---

##### `Monitors`<sup>Optional</sup> <a name="Monitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.monitors"></a>

```csharp
public IResolvable|AppconfigEnvironmentMonitors[] Monitors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

Amazon CloudWatch alarms to monitor during the deployment process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#monitors AppconfigEnvironment#monitors}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentConfig.property.tags"></a>

```csharp
public IResolvable|AppconfigEnvironmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

Metadata to assign to the environment.

Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#tags AppconfigEnvironment#tags}

---

### AppconfigEnvironmentMonitors <a name="AppconfigEnvironmentMonitors" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentMonitors {
    string AlarmArn = null,
    string AlarmRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmArn">AlarmArn</a></code> | <code>string</code> | Amazon Resource Name (ARN) of the Amazon CloudWatch alarm. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>string</code> | ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn. |

---

##### `AlarmArn`<sup>Optional</sup> <a name="AlarmArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmArn"></a>

```csharp
public string AlarmArn { get; set; }
```

- *Type:* string

Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#alarm_arn AppconfigEnvironment#alarm_arn}

---

##### `AlarmRoleArn`<sup>Optional</sup> <a name="AlarmRoleArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors.property.alarmRoleArn"></a>

```csharp
public string AlarmRoleArn { get; set; }
```

- *Type:* string

ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#alarm_role_arn AppconfigEnvironment#alarm_role_arn}

---

### AppconfigEnvironmentTags <a name="AppconfigEnvironmentTags" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.key">Key</a></code> | <code>string</code> | The key-value string map. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.value">Value</a></code> | <code>string</code> | The tag value can be up to 256 characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key-value string map.

The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#key AppconfigEnvironment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value can be up to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appconfig_environment#value AppconfigEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigEnvironmentMonitorsList <a name="AppconfigEnvironmentMonitorsList" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentMonitorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.get"></a>

```csharp
private AppconfigEnvironmentMonitorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigEnvironmentMonitors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>[]

---


### AppconfigEnvironmentMonitorsOutputReference <a name="AppconfigEnvironmentMonitorsOutputReference" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentMonitorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmArn">ResetAlarmArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmRoleArn">ResetAlarmRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlarmArn` <a name="ResetAlarmArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmArn"></a>

```csharp
private void ResetAlarmArn()
```

##### `ResetAlarmRoleArn` <a name="ResetAlarmRoleArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.resetAlarmRoleArn"></a>

```csharp
private void ResetAlarmRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArnInput">AlarmArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArnInput">AlarmRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArn">AlarmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArn">AlarmRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlarmArnInput`<sup>Optional</sup> <a name="AlarmArnInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArnInput"></a>

```csharp
public string AlarmArnInput { get; }
```

- *Type:* string

---

##### `AlarmRoleArnInput`<sup>Optional</sup> <a name="AlarmRoleArnInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArnInput"></a>

```csharp
public string AlarmRoleArnInput { get; }
```

- *Type:* string

---

##### `AlarmArn`<sup>Required</sup> <a name="AlarmArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmArn"></a>

```csharp
public string AlarmArn { get; }
```

- *Type:* string

---

##### `AlarmRoleArn`<sup>Required</sup> <a name="AlarmRoleArn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.alarmRoleArn"></a>

```csharp
public string AlarmRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigEnvironmentMonitors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentMonitors">AppconfigEnvironmentMonitors</a>

---


### AppconfigEnvironmentTagsList <a name="AppconfigEnvironmentTagsList" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.get"></a>

```csharp
private AppconfigEnvironmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigEnvironmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>[]

---


### AppconfigEnvironmentTagsOutputReference <a name="AppconfigEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigEnvironmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigEnvironmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigEnvironment.AppconfigEnvironmentTags">AppconfigEnvironmentTags</a>

---



