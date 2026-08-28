# `ssmcontactsContact` Submodule <a name="`ssmcontactsContact` Submodule" id="@cdktn/provider-awscc.ssmcontactsContact"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsContact <a name="SsmcontactsContact" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact awscc_ssmcontacts_contact}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContact(Construct Scope, string Id, SsmcontactsContactConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig">SsmcontactsContactConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig">SsmcontactsContactConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan">PutPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetPlan">ResetPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPlan` <a name="PutPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan"></a>

```csharp
private void PutPlan(IResolvable|SsmcontactsContactPlan[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putPlan.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags"></a>

```csharp
private void PutTags(IResolvable|SsmcontactsContactTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]

---

##### `ResetPlan` <a name="ResetPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetPlan"></a>

```csharp
private void ResetPlan()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsContact resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmcontactsContact.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmcontactsContact.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmcontactsContact.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmcontactsContact.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmcontactsContact resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmcontactsContact to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmcontactsContact that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsContact to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.plan">Plan</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList">SsmcontactsContactPlanList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList">SsmcontactsContactTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.planInput">PlanInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Plan`<sup>Required</sup> <a name="Plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.plan"></a>

```csharp
public SsmcontactsContactPlanList Plan { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList">SsmcontactsContactPlanList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tags"></a>

```csharp
public SsmcontactsContactTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList">SsmcontactsContactTagsList</a>

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `PlanInput`<sup>Optional</sup> <a name="PlanInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.planInput"></a>

```csharp
public IResolvable|SsmcontactsContactPlan[] PlanInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tagsInput"></a>

```csharp
public IResolvable|SsmcontactsContactTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContact.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsContactConfig <a name="SsmcontactsContactConfig" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Alias,
    string DisplayName,
    string Type,
    IResolvable|SsmcontactsContactPlan[] Plan = null,
    IResolvable|SsmcontactsContactTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.alias">Alias</a></code> | <code>string</code> | Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Name of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.type">Type</a></code> | <code>string</code> | Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.plan">Plan</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#alias SsmcontactsContact#alias}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Name of the contact.

String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#display_name SsmcontactsContact#display_name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#type SsmcontactsContact#type}

---

##### `Plan`<sup>Optional</sup> <a name="Plan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.plan"></a>

```csharp
public IResolvable|SsmcontactsContactPlan[] Plan { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#plan SsmcontactsContact#plan}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactConfig.property.tags"></a>

```csharp
public IResolvable|SsmcontactsContactTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#tags SsmcontactsContact#tags}.

---

### SsmcontactsContactPlan <a name="SsmcontactsContactPlan" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlan {
    double DurationInMinutes = null,
    string[] RotationIds = null,
    IResolvable|SsmcontactsContactPlanTargets[] Targets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.rotationIds">RotationIds</a></code> | <code>string[]</code> | List of Rotation Ids to associate with Contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]</code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; set; }
```

- *Type:* double

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#duration_in_minutes SsmcontactsContact#duration_in_minutes}

---

##### `RotationIds`<sup>Optional</sup> <a name="RotationIds" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.rotationIds"></a>

```csharp
public string[] RotationIds { get; set; }
```

- *Type:* string[]

List of Rotation Ids to associate with Contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#rotation_ids SsmcontactsContact#rotation_ids}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan.property.targets"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#targets SsmcontactsContact#targets}

---

### SsmcontactsContactPlanTargets <a name="SsmcontactsContactPlanTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargets {
    SsmcontactsContactPlanTargetsChannelTargetInfo ChannelTargetInfo = null,
    SsmcontactsContactPlanTargetsContactTargetInfo ContactTargetInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `ChannelTargetInfo`<sup>Optional</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.channelTargetInfo"></a>

```csharp
public SsmcontactsContactPlanTargetsChannelTargetInfo ChannelTargetInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#channel_target_info SsmcontactsContact#channel_target_info}

---

##### `ContactTargetInfo`<sup>Optional</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets.property.contactTargetInfo"></a>

```csharp
public SsmcontactsContactPlanTargetsContactTargetInfo ContactTargetInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#contact_target_info SsmcontactsContact#contact_target_info}

---

### SsmcontactsContactPlanTargetsChannelTargetInfo <a name="SsmcontactsContactPlanTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargetsChannelTargetInfo {
    string ChannelId = null,
    double RetryIntervalInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.channelId">ChannelId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>double</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#channel_id SsmcontactsContact#channel_id}

---

##### `RetryIntervalInMinutes`<sup>Optional</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```csharp
public double RetryIntervalInMinutes { get; set; }
```

- *Type:* double

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#retry_interval_in_minutes SsmcontactsContact#retry_interval_in_minutes}

---

### SsmcontactsContactPlanTargetsContactTargetInfo <a name="SsmcontactsContactPlanTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargetsContactTargetInfo {
    string ContactId = null,
    bool|IResolvable IsEssential = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.contactId">ContactId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.isEssential">IsEssential</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `ContactId`<sup>Optional</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.contactId"></a>

```csharp
public string ContactId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#contact_id SsmcontactsContact#contact_id}

---

##### `IsEssential`<sup>Optional</sup> <a name="IsEssential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo.property.isEssential"></a>

```csharp
public bool|IResolvable IsEssential { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#is_essential SsmcontactsContact#is_essential}

---

### SsmcontactsContactTags <a name="SsmcontactsContactTags" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#key SsmcontactsContact#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmcontacts_contact#value SsmcontactsContact#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsContactPlanList <a name="SsmcontactsContactPlanList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get"></a>

```csharp
private SsmcontactsContactPlanOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanList.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactPlan[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>[]

---


### SsmcontactsContactPlanOutputReference <a name="SsmcontactsContactPlanOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetRotationIds">ResetRotationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets"></a>

```csharp
private void PutTargets(IResolvable|SsmcontactsContactPlanTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]

---

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetDurationInMinutes"></a>

```csharp
private void ResetDurationInMinutes()
```

##### `ResetRotationIds` <a name="ResetRotationIds" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetRotationIds"></a>

```csharp
private void ResetRotationIds()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.resetTargets"></a>

```csharp
private void ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList">SsmcontactsContactPlanTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIdsInput">RotationIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIds">RotationIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targets"></a>

```csharp
public SsmcontactsContactPlanTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList">SsmcontactsContactPlanTargetsList</a>

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutesInput"></a>

```csharp
public double DurationInMinutesInput { get; }
```

- *Type:* double

---

##### `RotationIdsInput`<sup>Optional</sup> <a name="RotationIdsInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIdsInput"></a>

```csharp
public string[] RotationIdsInput { get; }
```

- *Type:* string[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.targetsInput"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.durationInMinutes"></a>

```csharp
public double DurationInMinutes { get; }
```

- *Type:* double

---

##### `RotationIds`<sup>Required</sup> <a name="RotationIds" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.rotationIds"></a>

```csharp
public string[] RotationIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactPlan InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlan">SsmcontactsContactPlan</a>

---


### SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference <a name="SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">ResetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```csharp
private void ResetChannelId()
```

##### `ResetRetryIntervalInMinutes` <a name="ResetRetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```csharp
private void ResetRetryIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">RetryIntervalInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `RetryIntervalInMinutesInput`<sup>Optional</sup> <a name="RetryIntervalInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```csharp
public double RetryIntervalInMinutesInput { get; }
```

- *Type:* double

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `RetryIntervalInMinutes`<sup>Required</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```csharp
public double RetryIntervalInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargetsChannelTargetInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

---


### SsmcontactsContactPlanTargetsContactTargetInfoOutputReference <a name="SsmcontactsContactPlanTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargetsContactTargetInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetContactId">ResetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetIsEssential">ResetIsEssential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactId` <a name="ResetContactId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetContactId"></a>

```csharp
private void ResetContactId()
```

##### `ResetIsEssential` <a name="ResetIsEssential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```csharp
private void ResetIsEssential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactIdInput">ContactIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssentialInput">IsEssentialInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId">ContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential">IsEssential</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```csharp
public string ContactIdInput { get; }
```

- *Type:* string

---

##### `IsEssentialInput`<sup>Optional</sup> <a name="IsEssentialInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```csharp
public bool|IResolvable IsEssentialInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.contactId"></a>

```csharp
public string ContactId { get; }
```

- *Type:* string

---

##### `IsEssential`<sup>Required</sup> <a name="IsEssential" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```csharp
public bool|IResolvable IsEssential { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargetsContactTargetInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

---


### SsmcontactsContactPlanTargetsList <a name="SsmcontactsContactPlanTargetsList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get"></a>

```csharp
private SsmcontactsContactPlanTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsList.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>[]

---


### SsmcontactsContactPlanTargetsOutputReference <a name="SsmcontactsContactPlanTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactPlanTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo">PutChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo">PutContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetChannelTargetInfo">ResetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetContactTargetInfo">ResetContactTargetInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChannelTargetInfo` <a name="PutChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo"></a>

```csharp
private void PutChannelTargetInfo(SsmcontactsContactPlanTargetsChannelTargetInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

---

##### `PutContactTargetInfo` <a name="PutContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo"></a>

```csharp
private void PutContactTargetInfo(SsmcontactsContactPlanTargetsContactTargetInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

---

##### `ResetChannelTargetInfo` <a name="ResetChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetChannelTargetInfo"></a>

```csharp
private void ResetChannelTargetInfo()
```

##### `ResetContactTargetInfo` <a name="ResetContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.resetContactTargetInfo"></a>

```csharp
private void ResetContactTargetInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference">SsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfoInput">ChannelTargetInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfoInput">ContactTargetInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelTargetInfo`<sup>Required</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfo"></a>

```csharp
public SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference ChannelTargetInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference">SsmcontactsContactPlanTargetsChannelTargetInfoOutputReference</a>

---

##### `ContactTargetInfo`<sup>Required</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfo"></a>

```csharp
public SsmcontactsContactPlanTargetsContactTargetInfoOutputReference ContactTargetInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfoOutputReference">SsmcontactsContactPlanTargetsContactTargetInfoOutputReference</a>

---

##### `ChannelTargetInfoInput`<sup>Optional</sup> <a name="ChannelTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.channelTargetInfoInput"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargetsChannelTargetInfo ChannelTargetInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsChannelTargetInfo">SsmcontactsContactPlanTargetsChannelTargetInfo</a>

---

##### `ContactTargetInfoInput`<sup>Optional</sup> <a name="ContactTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.contactTargetInfoInput"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargetsContactTargetInfo ContactTargetInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsContactTargetInfo">SsmcontactsContactPlanTargetsContactTargetInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactPlanTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactPlanTargets">SsmcontactsContactPlanTargets</a>

---


### SsmcontactsContactTagsList <a name="SsmcontactsContactTagsList" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get"></a>

```csharp
private SsmcontactsContactTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>[]

---


### SsmcontactsContactTagsOutputReference <a name="SsmcontactsContactTagsOutputReference" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmcontactsContactTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmcontactsContactTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmcontactsContact.SsmcontactsContactTags">SsmcontactsContactTags</a>

---



