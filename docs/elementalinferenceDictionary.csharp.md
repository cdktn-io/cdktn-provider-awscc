# `elementalinferenceDictionary` Submodule <a name="`elementalinferenceDictionary` Submodule" id="@cdktn/provider-awscc.elementalinferenceDictionary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElementalinferenceDictionary <a name="ElementalinferenceDictionary" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary awscc_elementalinference_dictionary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceDictionary(Construct Scope, string Id, ElementalinferenceDictionaryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig">ElementalinferenceDictionaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig">ElementalinferenceDictionaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetEntries">ResetEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEntries` <a name="ResetEntries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetEntries"></a>

```csharp
private void ResetEntries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElementalinferenceDictionary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceDictionary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceDictionary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceDictionary.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElementalinferenceDictionary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElementalinferenceDictionary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElementalinferenceDictionary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElementalinferenceDictionary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElementalinferenceDictionary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dictionaryId">DictionaryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entriesInput">EntriesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entries">Entries</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DictionaryId`<sup>Required</sup> <a name="DictionaryId" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.dictionaryId"></a>

```csharp
public string DictionaryId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entriesInput"></a>

```csharp
public string EntriesInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.entries"></a>

```csharp
public string Entries { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElementalinferenceDictionaryConfig <a name="ElementalinferenceDictionaryConfig" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElementalinferenceDictionaryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Language,
    string Name,
    string Entries = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.language">Language</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#language ElementalinferenceDictionary#language}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#name ElementalinferenceDictionary#name}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.entries">Entries</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#entries ElementalinferenceDictionary#entries}. |
| <code><a href="#@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#tags ElementalinferenceDictionary#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#language ElementalinferenceDictionary#language}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#name ElementalinferenceDictionary#name}.

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.entries"></a>

```csharp
public string Entries { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#entries ElementalinferenceDictionary#entries}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elementalinferenceDictionary.ElementalinferenceDictionaryConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elementalinference_dictionary#tags ElementalinferenceDictionary#tags}.

---



