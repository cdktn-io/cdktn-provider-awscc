# `uxcAccountCustomization` Submodule <a name="`uxcAccountCustomization` Submodule" id="@cdktn/provider-awscc.uxcAccountCustomization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UxcAccountCustomization <a name="UxcAccountCustomization" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/uxc_account_customization awscc_uxc_account_customization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new UxcAccountCustomization(Construct Scope, string Id, UxcAccountCustomizationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig">UxcAccountCustomizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig">UxcAccountCustomizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor">ResetAccountColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions">ResetVisibleRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices">ResetVisibleServices</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountColor` <a name="ResetAccountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetAccountColor"></a>

```csharp
private void ResetAccountColor()
```

##### `ResetVisibleRegions` <a name="ResetVisibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleRegions"></a>

```csharp
private void ResetVisibleRegions()
```

##### `ResetVisibleServices` <a name="ResetVisibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.resetVisibleServices"></a>

```csharp
private void ResetVisibleServices()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

UxcAccountCustomization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

UxcAccountCustomization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

UxcAccountCustomization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

UxcAccountCustomization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a UxcAccountCustomization resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the UxcAccountCustomization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing UxcAccountCustomization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/uxc_account_customization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the UxcAccountCustomization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput">AccountColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput">VisibleRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput">VisibleServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor">AccountColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions">VisibleRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices">VisibleServices</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountColorInput`<sup>Optional</sup> <a name="AccountColorInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColorInput"></a>

```csharp
public string AccountColorInput { get; }
```

- *Type:* string

---

##### `VisibleRegionsInput`<sup>Optional</sup> <a name="VisibleRegionsInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegionsInput"></a>

```csharp
public string[] VisibleRegionsInput { get; }
```

- *Type:* string[]

---

##### `VisibleServicesInput`<sup>Optional</sup> <a name="VisibleServicesInput" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServicesInput"></a>

```csharp
public string[] VisibleServicesInput { get; }
```

- *Type:* string[]

---

##### `AccountColor`<sup>Required</sup> <a name="AccountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.accountColor"></a>

```csharp
public string AccountColor { get; }
```

- *Type:* string

---

##### `VisibleRegions`<sup>Required</sup> <a name="VisibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleRegions"></a>

```csharp
public string[] VisibleRegions { get; }
```

- *Type:* string[]

---

##### `VisibleServices`<sup>Required</sup> <a name="VisibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.visibleServices"></a>

```csharp
public string[] VisibleServices { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UxcAccountCustomizationConfig <a name="UxcAccountCustomizationConfig" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new UxcAccountCustomizationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountColor = null,
    string[] VisibleRegions = null,
    string[] VisibleServices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor">AccountColor</a></code> | <code>string</code> | The color theme assigned to the account for visual identification in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions">VisibleRegions</a></code> | <code>string[]</code> | A list of AWS region identifiers visible to the account in the AWS Console. |
| <code><a href="#@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices">VisibleServices</a></code> | <code>string[]</code> | A list of AWS service identifiers visible to the account in the AWS Console. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountColor`<sup>Optional</sup> <a name="AccountColor" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.accountColor"></a>

```csharp
public string AccountColor { get; set; }
```

- *Type:* string

The color theme assigned to the account for visual identification in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/uxc_account_customization#account_color UxcAccountCustomization#account_color}

---

##### `VisibleRegions`<sup>Optional</sup> <a name="VisibleRegions" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleRegions"></a>

```csharp
public string[] VisibleRegions { get; set; }
```

- *Type:* string[]

A list of AWS region identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/uxc_account_customization#visible_regions UxcAccountCustomization#visible_regions}

---

##### `VisibleServices`<sup>Optional</sup> <a name="VisibleServices" id="@cdktn/provider-awscc.uxcAccountCustomization.UxcAccountCustomizationConfig.property.visibleServices"></a>

```csharp
public string[] VisibleServices { get; set; }
```

- *Type:* string[]

A list of AWS service identifiers visible to the account in the AWS Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/uxc_account_customization#visible_services UxcAccountCustomization#visible_services}

---



