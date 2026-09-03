# `macieCustomDataIdentifier` Submodule <a name="`macieCustomDataIdentifier` Submodule" id="@cdktn/provider-awscc.macieCustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MacieCustomDataIdentifier <a name="MacieCustomDataIdentifier" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier awscc_macie_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieCustomDataIdentifier(Construct Scope, string Id, MacieCustomDataIdentifierConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig">MacieCustomDataIdentifierConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig">MacieCustomDataIdentifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetIgnoreWords">ResetIgnoreWords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetMaximumMatchDistance">ResetMaximumMatchDistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.putTags"></a>

```csharp
private void PutTags(IResolvable|MacieCustomDataIdentifierTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetIgnoreWords` <a name="ResetIgnoreWords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetIgnoreWords"></a>

```csharp
private void ResetIgnoreWords()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetKeywords"></a>

```csharp
private void ResetKeywords()
```

##### `ResetMaximumMatchDistance` <a name="ResetMaximumMatchDistance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetMaximumMatchDistance"></a>

```csharp
private void ResetMaximumMatchDistance()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MacieCustomDataIdentifier resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieCustomDataIdentifier.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieCustomDataIdentifier.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieCustomDataIdentifier.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MacieCustomDataIdentifier.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MacieCustomDataIdentifier resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MacieCustomDataIdentifier to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MacieCustomDataIdentifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MacieCustomDataIdentifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.customDataIdentifierId">CustomDataIdentifierId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList">MacieCustomDataIdentifierTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWordsInput">IgnoreWordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywordsInput">KeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistanceInput">MaximumMatchDistanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWords">IgnoreWords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywords">Keywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regex">Regex</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CustomDataIdentifierId`<sup>Required</sup> <a name="CustomDataIdentifierId" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.customDataIdentifierId"></a>

```csharp
public string CustomDataIdentifierId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tags"></a>

```csharp
public MacieCustomDataIdentifierTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList">MacieCustomDataIdentifierTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IgnoreWordsInput`<sup>Optional</sup> <a name="IgnoreWordsInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWordsInput"></a>

```csharp
public string[] IgnoreWordsInput { get; }
```

- *Type:* string[]

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywordsInput"></a>

```csharp
public string[] KeywordsInput { get; }
```

- *Type:* string[]

---

##### `MaximumMatchDistanceInput`<sup>Optional</sup> <a name="MaximumMatchDistanceInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```csharp
public double MaximumMatchDistanceInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tagsInput"></a>

```csharp
public IResolvable|MacieCustomDataIdentifierTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IgnoreWords`<sup>Required</sup> <a name="IgnoreWords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.ignoreWords"></a>

```csharp
public string[] IgnoreWords { get; }
```

- *Type:* string[]

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.keywords"></a>

```csharp
public string[] Keywords { get; }
```

- *Type:* string[]

---

##### `MaximumMatchDistance`<sup>Required</sup> <a name="MaximumMatchDistance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.maximumMatchDistance"></a>

```csharp
public double MaximumMatchDistance { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifier.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MacieCustomDataIdentifierConfig <a name="MacieCustomDataIdentifierConfig" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieCustomDataIdentifierConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Regex,
    string Description = null,
    string[] IgnoreWords = null,
    string[] Keywords = null,
    double MaximumMatchDistance = null,
    IResolvable|MacieCustomDataIdentifierTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.name">Name</a></code> | <code>string</code> | Name of custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.regex">Regex</a></code> | <code>string</code> | Regular expression for custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.description">Description</a></code> | <code>string</code> | Description of custom data identifier. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.ignoreWords">IgnoreWords</a></code> | <code>string[]</code> | Words to be ignored. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.keywords">Keywords</a></code> | <code>string[]</code> | Keywords to be matched against. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>double</code> | Maximum match distance. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#name MacieCustomDataIdentifier#name}

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

Regular expression for custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#regex MacieCustomDataIdentifier#regex}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of custom data identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#description MacieCustomDataIdentifier#description}

---

##### `IgnoreWords`<sup>Optional</sup> <a name="IgnoreWords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.ignoreWords"></a>

```csharp
public string[] IgnoreWords { get; set; }
```

- *Type:* string[]

Words to be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#ignore_words MacieCustomDataIdentifier#ignore_words}

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.keywords"></a>

```csharp
public string[] Keywords { get; set; }
```

- *Type:* string[]

Keywords to be matched against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#keywords MacieCustomDataIdentifier#keywords}

---

##### `MaximumMatchDistance`<sup>Optional</sup> <a name="MaximumMatchDistance" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```csharp
public double MaximumMatchDistance { get; set; }
```

- *Type:* double

Maximum match distance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#maximum_match_distance MacieCustomDataIdentifier#maximum_match_distance}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierConfig.property.tags"></a>

```csharp
public IResolvable|MacieCustomDataIdentifierTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#tags MacieCustomDataIdentifier#tags}

---

### MacieCustomDataIdentifierTags <a name="MacieCustomDataIdentifierTags" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieCustomDataIdentifierTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.key">Key</a></code> | <code>string</code> | The tag's key. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.value">Value</a></code> | <code>string</code> | The tag's value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag's key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#key MacieCustomDataIdentifier#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/macie_custom_data_identifier#value MacieCustomDataIdentifier#value}

---

## Classes <a name="Classes" id="Classes"></a>

### MacieCustomDataIdentifierTagsList <a name="MacieCustomDataIdentifierTagsList" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieCustomDataIdentifierTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.get"></a>

```csharp
private MacieCustomDataIdentifierTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsList.property.internalValue"></a>

```csharp
public IResolvable|MacieCustomDataIdentifierTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>[]

---


### MacieCustomDataIdentifierTagsOutputReference <a name="MacieCustomDataIdentifierTagsOutputReference" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MacieCustomDataIdentifierTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MacieCustomDataIdentifierTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.macieCustomDataIdentifier.MacieCustomDataIdentifierTags">MacieCustomDataIdentifierTags</a>

---



