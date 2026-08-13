# `ssmquicksetupConfigurationManager` Submodule <a name="`ssmquicksetupConfigurationManager` Submodule" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmquicksetupConfigurationManager <a name="SsmquicksetupConfigurationManager" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager awscc_ssmquicksetup_configuration_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManager(Construct Scope, string Id, SsmquicksetupConfigurationManagerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig">SsmquicksetupConfigurationManagerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig">SsmquicksetupConfigurationManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinitions">PutConfigurationDefinitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationDefinitions` <a name="PutConfigurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinitions"></a>

```csharp
private void PutConfigurationDefinitions(IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.putConfigurationDefinitions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupConfigurationManager.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupConfigurationManager.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupConfigurationManager.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmquicksetupConfigurationManager.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmquicksetupConfigurationManager resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmquicksetupConfigurationManager to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmquicksetupConfigurationManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmquicksetupConfigurationManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitions">ConfigurationDefinitions</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList">SsmquicksetupConfigurationManagerConfigurationDefinitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lastModifiedAt">LastModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn">ManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries">StatusSummaries</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionsInput">ConfigurationDefinitionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationDefinitions`<sup>Required</sup> <a name="ConfigurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitions"></a>

```csharp
public SsmquicksetupConfigurationManagerConfigurationDefinitionsList ConfigurationDefinitions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList">SsmquicksetupConfigurationManagerConfigurationDefinitionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.lastModifiedAt"></a>

```csharp
public string LastModifiedAt { get; }
```

- *Type:* string

---

##### `ManagerArn`<sup>Required</sup> <a name="ManagerArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.managerArn"></a>

```csharp
public string ManagerArn { get; }
```

- *Type:* string

---

##### `StatusSummaries`<sup>Required</sup> <a name="StatusSummaries" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.statusSummaries"></a>

```csharp
public SsmquicksetupConfigurationManagerStatusSummariesList StatusSummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList">SsmquicksetupConfigurationManagerStatusSummariesList</a>

---

##### `ConfigurationDefinitionsInput`<sup>Optional</sup> <a name="ConfigurationDefinitionsInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.configurationDefinitionsInput"></a>

```csharp
public IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions[] ConfigurationDefinitionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManager.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmquicksetupConfigurationManagerConfig <a name="SsmquicksetupConfigurationManagerConfig" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions[] ConfigurationDefinitions,
    string Description = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinitions">ConfigurationDefinitions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions SsmquicksetupConfigurationManager#configuration_definitions}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationDefinitions`<sup>Required</sup> <a name="ConfigurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.configurationDefinitions"></a>

```csharp
public IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions[] ConfigurationDefinitions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#configuration_definitions SsmquicksetupConfigurationManager#configuration_definitions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#description SsmquicksetupConfigurationManager#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#name SsmquicksetupConfigurationManager#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#tags SsmquicksetupConfigurationManager#tags}.

---

### SsmquicksetupConfigurationManagerConfigurationDefinitions <a name="SsmquicksetupConfigurationManagerConfigurationDefinitions" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerConfigurationDefinitions {
    System.Collections.Generic.IDictionary<string, string> Parameters,
    string Type,
    string Id = null,
    string LocalDeploymentAdministrationRoleArn = null,
    string LocalDeploymentExecutionRoleName = null,
    string TypeVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#id SsmquicksetupConfigurationManager#id}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentAdministrationRoleArn">LocalDeploymentAdministrationRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentExecutionRoleName">LocalDeploymentExecutionRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.typeVersion">TypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}. |

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#parameters SsmquicksetupConfigurationManager#parameters}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#type SsmquicksetupConfigurationManager#type}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#id SsmquicksetupConfigurationManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalDeploymentAdministrationRoleArn`<sup>Optional</sup> <a name="LocalDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentAdministrationRoleArn"></a>

```csharp
public string LocalDeploymentAdministrationRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_administration_role_arn SsmquicksetupConfigurationManager#local_deployment_administration_role_arn}.

---

##### `LocalDeploymentExecutionRoleName`<sup>Optional</sup> <a name="LocalDeploymentExecutionRoleName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.localDeploymentExecutionRoleName"></a>

```csharp
public string LocalDeploymentExecutionRoleName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#local_deployment_execution_role_name SsmquicksetupConfigurationManager#local_deployment_execution_role_name}.

---

##### `TypeVersion`<sup>Optional</sup> <a name="TypeVersion" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions.property.typeVersion"></a>

```csharp
public string TypeVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmquicksetup_configuration_manager#type_version SsmquicksetupConfigurationManager#type_version}.

---

### SsmquicksetupConfigurationManagerStatusSummaries <a name="SsmquicksetupConfigurationManagerStatusSummaries" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerStatusSummaries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### SsmquicksetupConfigurationManagerConfigurationDefinitionsList <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionsList" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerConfigurationDefinitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.get"></a>

```csharp
private SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsList.property.internalValue"></a>

```csharp
public IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>[]

---


### SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference <a name="SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentAdministrationRoleArn">ResetLocalDeploymentAdministrationRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentExecutionRoleName">ResetLocalDeploymentExecutionRoleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetTypeVersion">ResetTypeVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalDeploymentAdministrationRoleArn` <a name="ResetLocalDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentAdministrationRoleArn"></a>

```csharp
private void ResetLocalDeploymentAdministrationRoleArn()
```

##### `ResetLocalDeploymentExecutionRoleName` <a name="ResetLocalDeploymentExecutionRoleName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetLocalDeploymentExecutionRoleName"></a>

```csharp
private void ResetLocalDeploymentExecutionRoleName()
```

##### `ResetTypeVersion` <a name="ResetTypeVersion" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.resetTypeVersion"></a>

```csharp
private void ResetTypeVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArnInput">LocalDeploymentAdministrationRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleNameInput">LocalDeploymentExecutionRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parametersInput">ParametersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersionInput">TypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn">LocalDeploymentAdministrationRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName">LocalDeploymentExecutionRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters">Parameters</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion">TypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalDeploymentAdministrationRoleArnInput`<sup>Optional</sup> <a name="LocalDeploymentAdministrationRoleArnInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArnInput"></a>

```csharp
public string LocalDeploymentAdministrationRoleArnInput { get; }
```

- *Type:* string

---

##### `LocalDeploymentExecutionRoleNameInput`<sup>Optional</sup> <a name="LocalDeploymentExecutionRoleNameInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleNameInput"></a>

```csharp
public string LocalDeploymentExecutionRoleNameInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parametersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParametersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `TypeVersionInput`<sup>Optional</sup> <a name="TypeVersionInput" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersionInput"></a>

```csharp
public string TypeVersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalDeploymentAdministrationRoleArn`<sup>Required</sup> <a name="LocalDeploymentAdministrationRoleArn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentAdministrationRoleArn"></a>

```csharp
public string LocalDeploymentAdministrationRoleArn { get; }
```

- *Type:* string

---

##### `LocalDeploymentExecutionRoleName`<sup>Required</sup> <a name="LocalDeploymentExecutionRoleName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.localDeploymentExecutionRoleName"></a>

```csharp
public string LocalDeploymentExecutionRoleName { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.parameters"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Parameters { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `TypeVersion`<sup>Required</sup> <a name="TypeVersion" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.typeVersion"></a>

```csharp
public string TypeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmquicksetupConfigurationManagerConfigurationDefinitions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerConfigurationDefinitions">SsmquicksetupConfigurationManagerConfigurationDefinitions</a>

---


### SsmquicksetupConfigurationManagerStatusSummariesList <a name="SsmquicksetupConfigurationManagerStatusSummariesList" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerStatusSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get"></a>

```csharp
private SsmquicksetupConfigurationManagerStatusSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SsmquicksetupConfigurationManagerStatusSummariesOutputReference <a name="SsmquicksetupConfigurationManagerStatusSummariesOutputReference" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmquicksetupConfigurationManagerStatusSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails">StatusDetails</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType">StatusType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusDetails"></a>

```csharp
public StringMap StatusDetails { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `StatusType`<sup>Required</sup> <a name="StatusType" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.statusType"></a>

```csharp
public string StatusType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummariesOutputReference.property.internalValue"></a>

```csharp
public SsmquicksetupConfigurationManagerStatusSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmquicksetupConfigurationManager.SsmquicksetupConfigurationManagerStatusSummaries">SsmquicksetupConfigurationManagerStatusSummaries</a>

---



