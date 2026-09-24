# `casesRelatedItem` Submodule <a name="`casesRelatedItem` Submodule" id="@cdktn/provider-awscc.casesRelatedItem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CasesRelatedItem <a name="CasesRelatedItem" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item awscc_cases_related_item}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItem(Construct Scope, string Id, CasesRelatedItemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig">CasesRelatedItemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig">CasesRelatedItemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent"></a>

```csharp
private void PutContent(CasesRelatedItemContent Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags"></a>

```csharp
private void PutTags(IResolvable|CasesRelatedItemTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesRelatedItem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesRelatedItem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesRelatedItem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CasesRelatedItem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CasesRelatedItem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CasesRelatedItem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CasesRelatedItem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CasesRelatedItem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn">RelatedItemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId">RelatedItemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput">CaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput">ContentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput">DomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId">CaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId">DomainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.content"></a>

```csharp
public CasesRelatedItemContentOutputReference Content { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference">CasesRelatedItemContentOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RelatedItemArn`<sup>Required</sup> <a name="RelatedItemArn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemArn"></a>

```csharp
public string RelatedItemArn { get; }
```

- *Type:* string

---

##### `RelatedItemId`<sup>Required</sup> <a name="RelatedItemId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.relatedItemId"></a>

```csharp
public string RelatedItemId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tags"></a>

```csharp
public CasesRelatedItemTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList">CasesRelatedItemTagsList</a>

---

##### `CaseIdInput`<sup>Optional</sup> <a name="CaseIdInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseIdInput"></a>

```csharp
public string CaseIdInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.contentInput"></a>

```csharp
public IResolvable|CasesRelatedItemContent ContentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainIdInput"></a>

```csharp
public string DomainIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tagsInput"></a>

```csharp
public IResolvable|CasesRelatedItemTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `CaseId`<sup>Required</sup> <a name="CaseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.caseId"></a>

```csharp
public string CaseId { get; }
```

- *Type:* string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.domainId"></a>

```csharp
public string DomainId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CasesRelatedItemConfig <a name="CasesRelatedItemConfig" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CaseId,
    CasesRelatedItemContent Content,
    string DomainId,
    string Type,
    IResolvable|CasesRelatedItemTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId">CaseId</a></code> | <code>string</code> | A unique identifier of the case. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | The content of a related item to be created. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId">DomainId</a></code> | <code>string</code> | The unique identifier of the Cases domain. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type">Type</a></code> | <code>string</code> | The type of a related item. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]</code> | A list of tags on the related item. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaseId`<sup>Required</sup> <a name="CaseId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.caseId"></a>

```csharp
public string CaseId { get; set; }
```

- *Type:* string

A unique identifier of the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#case_id CasesRelatedItem#case_id}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.content"></a>

```csharp
public CasesRelatedItemContent Content { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

The content of a related item to be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content CasesRelatedItem#content}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.domainId"></a>

```csharp
public string DomainId { get; set; }
```

- *Type:* string

The unique identifier of the Cases domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#domain_id CasesRelatedItem#domain_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of a related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#type CasesRelatedItem#type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemConfig.property.tags"></a>

```csharp
public IResolvable|CasesRelatedItemTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

A list of tags on the related item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#tags CasesRelatedItem#tags}

---

### CasesRelatedItemContent <a name="CasesRelatedItemContent" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemContent {
    CasesRelatedItemContentComment Comment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment">Comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | Represents a comment. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent.property.comment"></a>

```csharp
public CasesRelatedItemContentComment Comment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

Represents a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#comment CasesRelatedItem#comment}

---

### CasesRelatedItemContentComment <a name="CasesRelatedItemContentComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemContentComment {
    string Body = null,
    string ContentType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body">Body</a></code> | <code>string</code> | Text in the body of a comment. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType">ContentType</a></code> | <code>string</code> | Type of the text in the comment. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

Text in the body of a comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#body CasesRelatedItem#body}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Type of the text in the comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#content_type CasesRelatedItem#content_type}

---

### CasesRelatedItemTags <a name="CasesRelatedItemTags" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#key CasesRelatedItem#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/cases_related_item#value CasesRelatedItem#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CasesRelatedItemContentCommentOutputReference <a name="CasesRelatedItemContentCommentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemContentCommentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesRelatedItemContentComment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---


### CasesRelatedItemContentOutputReference <a name="CasesRelatedItemContentOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment">PutComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComment` <a name="PutComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment"></a>

```csharp
private void PutComment(CasesRelatedItemContentComment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.putComment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment">Comment</a></code> | <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput">CommentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.comment"></a>

```csharp
public CasesRelatedItemContentCommentOutputReference Comment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentCommentOutputReference">CasesRelatedItemContentCommentOutputReference</a>

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.commentInput"></a>

```csharp
public IResolvable|CasesRelatedItemContentComment CommentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentComment">CasesRelatedItemContentComment</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesRelatedItemContent InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemContent">CasesRelatedItemContent</a>

---


### CasesRelatedItemTagsList <a name="CasesRelatedItemTagsList" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get"></a>

```csharp
private CasesRelatedItemTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsList.property.internalValue"></a>

```csharp
public IResolvable|CasesRelatedItemTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>[]

---


### CasesRelatedItemTagsOutputReference <a name="CasesRelatedItemTagsOutputReference" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CasesRelatedItemTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CasesRelatedItemTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.casesRelatedItem.CasesRelatedItemTags">CasesRelatedItemTags</a>

---



