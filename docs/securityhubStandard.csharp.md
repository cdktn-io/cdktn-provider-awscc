# `securityhubStandard` Submodule <a name="`securityhubStandard` Submodule" id="@cdktn/provider-awscc.securityhubStandard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubStandard <a name="SecurityhubStandard" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_standard awscc_securityhub_standard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubStandard(Construct Scope, string Id, SecurityhubStandardConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig">SecurityhubStandardConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig">SecurityhubStandardConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.putDisabledStandardsControls">PutDisabledStandardsControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.resetDisabledStandardsControls">ResetDisabledStandardsControls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDisabledStandardsControls` <a name="PutDisabledStandardsControls" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.putDisabledStandardsControls"></a>

```csharp
private void PutDisabledStandardsControls(IResolvable|SecurityhubStandardDisabledStandardsControls[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.putDisabledStandardsControls.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]

---

##### `ResetDisabledStandardsControls` <a name="ResetDisabledStandardsControls" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.resetDisabledStandardsControls"></a>

```csharp
private void ResetDisabledStandardsControls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubStandard resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubStandard.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubStandard.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubStandard.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubStandard.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubStandard resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubStandard to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubStandard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_standard#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubStandard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.disabledStandardsControls">DisabledStandardsControls</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList">SecurityhubStandardDisabledStandardsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.standardsSubscriptionArn">StandardsSubscriptionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.disabledStandardsControlsInput">DisabledStandardsControlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.standardsArnInput">StandardsArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.standardsArn">StandardsArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisabledStandardsControls`<sup>Required</sup> <a name="DisabledStandardsControls" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.disabledStandardsControls"></a>

```csharp
public SecurityhubStandardDisabledStandardsControlsList DisabledStandardsControls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList">SecurityhubStandardDisabledStandardsControlsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StandardsSubscriptionArn`<sup>Required</sup> <a name="StandardsSubscriptionArn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.standardsSubscriptionArn"></a>

```csharp
public string StandardsSubscriptionArn { get; }
```

- *Type:* string

---

##### `DisabledStandardsControlsInput`<sup>Optional</sup> <a name="DisabledStandardsControlsInput" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.disabledStandardsControlsInput"></a>

```csharp
public IResolvable|SecurityhubStandardDisabledStandardsControls[] DisabledStandardsControlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]

---

##### `StandardsArnInput`<sup>Optional</sup> <a name="StandardsArnInput" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.standardsArnInput"></a>

```csharp
public string StandardsArnInput { get; }
```

- *Type:* string

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.standardsArn"></a>

```csharp
public string StandardsArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandard.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubStandardConfig <a name="SecurityhubStandardConfig" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubStandardConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string StandardsArn,
    IResolvable|SecurityhubStandardDisabledStandardsControls[] DisabledStandardsControls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.standardsArn">StandardsArn</a></code> | <code>string</code> | The ARN of the standard that you want to enable. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.disabledStandardsControls">DisabledStandardsControls</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]</code> | Specifies which controls are to be disabled in a standard.   *Maximum*: ``100``. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `StandardsArn`<sup>Required</sup> <a name="StandardsArn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.standardsArn"></a>

```csharp
public string StandardsArn { get; set; }
```

- *Type:* string

The ARN of the standard that you want to enable.

To view a list of available ASH standards and their ARNs, use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_standard#standards_arn SecurityhubStandard#standards_arn}

---

##### `DisabledStandardsControls`<sup>Optional</sup> <a name="DisabledStandardsControls" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardConfig.property.disabledStandardsControls"></a>

```csharp
public IResolvable|SecurityhubStandardDisabledStandardsControls[] DisabledStandardsControls { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]

Specifies which controls are to be disabled in a standard.   *Maximum*: ``100``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_standard#disabled_standards_controls SecurityhubStandard#disabled_standards_controls}

---

### SecurityhubStandardDisabledStandardsControls <a name="SecurityhubStandardDisabledStandardsControls" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubStandardDisabledStandardsControls {
    string Reason = null,
    string StandardsControlArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls.property.reason">Reason</a></code> | <code>string</code> | A user-defined reason for changing a control's enablement status in a specified standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls.property.standardsControlArn">StandardsControlArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the control. |

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls.property.reason"></a>

```csharp
public string Reason { get; set; }
```

- *Type:* string

A user-defined reason for changing a control's enablement status in a specified standard.

If you are disabling a control, then this property is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_standard#reason SecurityhubStandard#reason}

---

##### `StandardsControlArn`<sup>Optional</sup> <a name="StandardsControlArn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls.property.standardsControlArn"></a>

```csharp
public string StandardsControlArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_standard#standards_control_arn SecurityhubStandard#standards_control_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubStandardDisabledStandardsControlsList <a name="SecurityhubStandardDisabledStandardsControlsList" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubStandardDisabledStandardsControlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.get"></a>

```csharp
private SecurityhubStandardDisabledStandardsControlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubStandardDisabledStandardsControls[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>[]

---


### SecurityhubStandardDisabledStandardsControlsOutputReference <a name="SecurityhubStandardDisabledStandardsControlsOutputReference" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubStandardDisabledStandardsControlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resetReason">ResetReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resetStandardsControlArn">ResetStandardsControlArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resetReason"></a>

```csharp
private void ResetReason()
```

##### `ResetStandardsControlArn` <a name="ResetStandardsControlArn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.resetStandardsControlArn"></a>

```csharp
private void ResetStandardsControlArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.reasonInput">ReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.standardsControlArnInput">StandardsControlArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.standardsControlArn">StandardsControlArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.reasonInput"></a>

```csharp
public string ReasonInput { get; }
```

- *Type:* string

---

##### `StandardsControlArnInput`<sup>Optional</sup> <a name="StandardsControlArnInput" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.standardsControlArnInput"></a>

```csharp
public string StandardsControlArnInput { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `StandardsControlArn`<sup>Required</sup> <a name="StandardsControlArn" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.standardsControlArn"></a>

```csharp
public string StandardsControlArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubStandardDisabledStandardsControls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubStandard.SecurityhubStandardDisabledStandardsControls">SecurityhubStandardDisabledStandardsControls</a>

---



