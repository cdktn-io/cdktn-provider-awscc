# `mpaIdentitySource` Submodule <a name="`mpaIdentitySource` Submodule" id="@cdktn/provider-awscc.mpaIdentitySource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MpaIdentitySource <a name="MpaIdentitySource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source awscc_mpa_identity_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySource(Construct Scope, string Id, MpaIdentitySourceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig">MpaIdentitySourceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig">MpaIdentitySourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters">PutIdentitySourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentitySourceParameters` <a name="PutIdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters"></a>

```csharp
private void PutIdentitySourceParameters(MpaIdentitySourceIdentitySourceParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putIdentitySourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags"></a>

```csharp
private void PutTags(IResolvable|MpaIdentitySourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MpaIdentitySource.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MpaIdentitySource.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MpaIdentitySource.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MpaIdentitySource.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MpaIdentitySource resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MpaIdentitySource to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MpaIdentitySource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MpaIdentitySource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceArn">IdentitySourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParameters">IdentitySourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference">MpaIdentitySourceIdentitySourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceType">IdentitySourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList">MpaIdentitySourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParametersInput">IdentitySourceParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentitySourceArn`<sup>Required</sup> <a name="IdentitySourceArn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceArn"></a>

```csharp
public string IdentitySourceArn { get; }
```

- *Type:* string

---

##### `IdentitySourceParameters`<sup>Required</sup> <a name="IdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParameters"></a>

```csharp
public MpaIdentitySourceIdentitySourceParametersOutputReference IdentitySourceParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference">MpaIdentitySourceIdentitySourceParametersOutputReference</a>

---

##### `IdentitySourceType`<sup>Required</sup> <a name="IdentitySourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceType"></a>

```csharp
public string IdentitySourceType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tags"></a>

```csharp
public MpaIdentitySourceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList">MpaIdentitySourceTagsList</a>

---

##### `IdentitySourceParametersInput`<sup>Optional</sup> <a name="IdentitySourceParametersInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.identitySourceParametersInput"></a>

```csharp
public IResolvable|MpaIdentitySourceIdentitySourceParameters IdentitySourceParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tagsInput"></a>

```csharp
public IResolvable|MpaIdentitySourceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySource.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MpaIdentitySourceConfig <a name="MpaIdentitySourceConfig" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MpaIdentitySourceIdentitySourceParameters IdentitySourceParameters,
    IResolvable|MpaIdentitySourceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.identitySourceParameters">IdentitySourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdentitySourceParameters`<sup>Required</sup> <a name="IdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.identitySourceParameters"></a>

```csharp
public MpaIdentitySourceIdentitySourceParameters IdentitySourceParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#identity_source_parameters MpaIdentitySource#identity_source_parameters}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceConfig.property.tags"></a>

```csharp
public IResolvable|MpaIdentitySourceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#tags MpaIdentitySource#tags}.

---

### MpaIdentitySourceIdentitySourceParameters <a name="MpaIdentitySourceIdentitySourceParameters" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceIdentitySourceParameters {
    MpaIdentitySourceIdentitySourceParametersIamIdentityCenter IamIdentityCenter
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.property.iamIdentityCenter">IamIdentityCenter</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}. |

---

##### `IamIdentityCenter`<sup>Required</sup> <a name="IamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters.property.iamIdentityCenter"></a>

```csharp
public MpaIdentitySourceIdentitySourceParametersIamIdentityCenter IamIdentityCenter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#iam_identity_center MpaIdentitySource#iam_identity_center}.

---

### MpaIdentitySourceIdentitySourceParametersIamIdentityCenter <a name="MpaIdentitySourceIdentitySourceParametersIamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceIdentitySourceParametersIamIdentityCenter {
    string InstanceArn,
    string Region
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}. |

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#instance_arn MpaIdentitySource#instance_arn}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#region MpaIdentitySource#region}.

---

### MpaIdentitySourceTags <a name="MpaIdentitySourceTags" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#key MpaIdentitySource#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mpa_identity_source#value MpaIdentitySource#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference <a name="MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl">ApprovalPortalUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApprovalPortalUrl`<sup>Required</sup> <a name="ApprovalPortalUrl" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.approvalPortalUrl"></a>

```csharp
public string ApprovalPortalUrl { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MpaIdentitySourceIdentitySourceParametersIamIdentityCenter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---


### MpaIdentitySourceIdentitySourceParametersOutputReference <a name="MpaIdentitySourceIdentitySourceParametersOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceIdentitySourceParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter">PutIamIdentityCenter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIamIdentityCenter` <a name="PutIamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter"></a>

```csharp
private void PutIamIdentityCenter(MpaIdentitySourceIdentitySourceParametersIamIdentityCenter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.putIamIdentityCenter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter">IamIdentityCenter</a></code> | <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenterInput">IamIdentityCenterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamIdentityCenter`<sup>Required</sup> <a name="IamIdentityCenter" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenter"></a>

```csharp
public MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference IamIdentityCenter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference">MpaIdentitySourceIdentitySourceParametersIamIdentityCenterOutputReference</a>

---

##### `IamIdentityCenterInput`<sup>Optional</sup> <a name="IamIdentityCenterInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.iamIdentityCenterInput"></a>

```csharp
public IResolvable|MpaIdentitySourceIdentitySourceParametersIamIdentityCenter IamIdentityCenterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersIamIdentityCenter">MpaIdentitySourceIdentitySourceParametersIamIdentityCenter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MpaIdentitySourceIdentitySourceParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceIdentitySourceParameters">MpaIdentitySourceIdentitySourceParameters</a>

---


### MpaIdentitySourceTagsList <a name="MpaIdentitySourceTagsList" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get"></a>

```csharp
private MpaIdentitySourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|MpaIdentitySourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>[]

---


### MpaIdentitySourceTagsOutputReference <a name="MpaIdentitySourceTagsOutputReference" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MpaIdentitySourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MpaIdentitySourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mpaIdentitySource.MpaIdentitySourceTags">MpaIdentitySourceTags</a>

---



