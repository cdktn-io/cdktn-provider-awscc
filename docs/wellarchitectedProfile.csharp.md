# `wellarchitectedProfile` Submodule <a name="`wellarchitectedProfile` Submodule" id="@cdktn/provider-awscc.wellarchitectedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedProfile <a name="WellarchitectedProfile" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile awscc_wellarchitected_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfile(Construct Scope, string Id, WellarchitectedProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig">WellarchitectedProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig">WellarchitectedProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putProfileQuestions">PutProfileQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProfileQuestions` <a name="PutProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putProfileQuestions"></a>

```csharp
private void PutProfileQuestions(IResolvable|WellarchitectedProfileProfileQuestions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putProfileQuestions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putTags"></a>

```csharp
private void PutTags(IResolvable|WellarchitectedProfileTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WellarchitectedProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WellarchitectedProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WellarchitectedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileArn">ProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestions">ProfileQuestions</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList">WellarchitectedProfileProfileQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileVersion">ProfileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList">WellarchitectedProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescriptionInput">ProfileDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestionsInput">ProfileQuestionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescription">ProfileDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileName">ProfileName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileArn"></a>

```csharp
public string ProfileArn { get; }
```

- *Type:* string

---

##### `ProfileQuestions`<sup>Required</sup> <a name="ProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestions"></a>

```csharp
public WellarchitectedProfileProfileQuestionsList ProfileQuestions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList">WellarchitectedProfileProfileQuestionsList</a>

---

##### `ProfileVersion`<sup>Required</sup> <a name="ProfileVersion" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileVersion"></a>

```csharp
public string ProfileVersion { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tags"></a>

```csharp
public WellarchitectedProfileTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList">WellarchitectedProfileTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ProfileDescriptionInput`<sup>Optional</sup> <a name="ProfileDescriptionInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescriptionInput"></a>

```csharp
public string ProfileDescriptionInput { get; }
```

- *Type:* string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileNameInput"></a>

```csharp
public string ProfileNameInput { get; }
```

- *Type:* string

---

##### `ProfileQuestionsInput`<sup>Optional</sup> <a name="ProfileQuestionsInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestionsInput"></a>

```csharp
public IResolvable|WellarchitectedProfileProfileQuestions[] ProfileQuestionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tagsInput"></a>

```csharp
public IResolvable|WellarchitectedProfileTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescription"></a>

```csharp
public string ProfileDescription { get; }
```

- *Type:* string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileName"></a>

```csharp
public string ProfileName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedProfileConfig <a name="WellarchitectedProfileConfig" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProfileDescription,
    string ProfileName,
    IResolvable|WellarchitectedProfileProfileQuestions[] ProfileQuestions,
    IResolvable|WellarchitectedProfileTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileDescription">ProfileDescription</a></code> | <code>string</code> | The profile description. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileName">ProfileName</a></code> | <code>string</code> | The name of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileQuestions">ProfileQuestions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]</code> | The profile questions. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]</code> | The tags assigned to the profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileDescription"></a>

```csharp
public string ProfileDescription { get; set; }
```

- *Type:* string

The profile description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#profile_description WellarchitectedProfile#profile_description}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileName"></a>

```csharp
public string ProfileName { get; set; }
```

- *Type:* string

The name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#profile_name WellarchitectedProfile#profile_name}

---

##### `ProfileQuestions`<sup>Required</sup> <a name="ProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileQuestions"></a>

```csharp
public IResolvable|WellarchitectedProfileProfileQuestions[] ProfileQuestions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]

The profile questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#profile_questions WellarchitectedProfile#profile_questions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.tags"></a>

```csharp
public IResolvable|WellarchitectedProfileTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]

The tags assigned to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#tags WellarchitectedProfile#tags}

---

### WellarchitectedProfileProfileQuestions <a name="WellarchitectedProfileProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileProfileQuestions {
    string QuestionId = null,
    string[] SelectedChoiceIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.questionId">QuestionId</a></code> | <code>string</code> | The ID of the question. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.selectedChoiceIds">SelectedChoiceIds</a></code> | <code>string[]</code> | The selected choices. |

---

##### `QuestionId`<sup>Optional</sup> <a name="QuestionId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.questionId"></a>

```csharp
public string QuestionId { get; set; }
```

- *Type:* string

The ID of the question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#question_id WellarchitectedProfile#question_id}

---

##### `SelectedChoiceIds`<sup>Optional</sup> <a name="SelectedChoiceIds" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.selectedChoiceIds"></a>

```csharp
public string[] SelectedChoiceIds { get; set; }
```

- *Type:* string[]

The selected choices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#selected_choice_ids WellarchitectedProfile#selected_choice_ids}

---

### WellarchitectedProfileTags <a name="WellarchitectedProfileTags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#key WellarchitectedProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/wellarchitected_profile#value WellarchitectedProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedProfileProfileQuestionsList <a name="WellarchitectedProfileProfileQuestionsList" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileProfileQuestionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.get"></a>

```csharp
private WellarchitectedProfileProfileQuestionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedProfileProfileQuestions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>[]

---


### WellarchitectedProfileProfileQuestionsOutputReference <a name="WellarchitectedProfileProfileQuestionsOutputReference" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileProfileQuestionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetQuestionId">ResetQuestionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetSelectedChoiceIds">ResetSelectedChoiceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuestionId` <a name="ResetQuestionId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetQuestionId"></a>

```csharp
private void ResetQuestionId()
```

##### `ResetSelectedChoiceIds` <a name="ResetSelectedChoiceIds" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetSelectedChoiceIds"></a>

```csharp
private void ResetSelectedChoiceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionIdInput">QuestionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIdsInput">SelectedChoiceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionId">QuestionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIds">SelectedChoiceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QuestionIdInput`<sup>Optional</sup> <a name="QuestionIdInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionIdInput"></a>

```csharp
public string QuestionIdInput { get; }
```

- *Type:* string

---

##### `SelectedChoiceIdsInput`<sup>Optional</sup> <a name="SelectedChoiceIdsInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIdsInput"></a>

```csharp
public string[] SelectedChoiceIdsInput { get; }
```

- *Type:* string[]

---

##### `QuestionId`<sup>Required</sup> <a name="QuestionId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionId"></a>

```csharp
public string QuestionId { get; }
```

- *Type:* string

---

##### `SelectedChoiceIds`<sup>Required</sup> <a name="SelectedChoiceIds" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIds"></a>

```csharp
public string[] SelectedChoiceIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedProfileProfileQuestions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions">WellarchitectedProfileProfileQuestions</a>

---


### WellarchitectedProfileTagsList <a name="WellarchitectedProfileTagsList" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.get"></a>

```csharp
private WellarchitectedProfileTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedProfileTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>[]

---


### WellarchitectedProfileTagsOutputReference <a name="WellarchitectedProfileTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedProfileTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedProfileTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags">WellarchitectedProfileTags</a>

---



