# `customerprofilesRecommenderFilter` Submodule <a name="`customerprofilesRecommenderFilter` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommenderFilter <a name="CustomerprofilesRecommenderFilter" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter awscc_customerprofiles_recommender_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderFilter(Construct Scope, string Id, CustomerprofilesRecommenderFilterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig">CustomerprofilesRecommenderFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig">CustomerprofilesRecommenderFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetRecommenderSchemaName">ResetRecommenderSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags"></a>

```csharp
private void PutTags(IResolvable|CustomerprofilesRecommenderFilterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRecommenderSchemaName` <a name="ResetRecommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetRecommenderSchemaName"></a>

```csharp
private void ResetRecommenderSchemaName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommenderFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommenderFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommenderFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommenderFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesRecommenderFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesRecommenderFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesRecommenderFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommenderFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterArn">RecommenderFilterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList">CustomerprofilesRecommenderFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpressionInput">RecommenderFilterExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterNameInput">RecommenderFilterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaNameInput">RecommenderSchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpression">RecommenderFilterExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterName">RecommenderFilterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaName">RecommenderSchemaName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RecommenderFilterArn`<sup>Required</sup> <a name="RecommenderFilterArn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterArn"></a>

```csharp
public string RecommenderFilterArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tags"></a>

```csharp
public CustomerprofilesRecommenderFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList">CustomerprofilesRecommenderFilterTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `RecommenderFilterExpressionInput`<sup>Optional</sup> <a name="RecommenderFilterExpressionInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpressionInput"></a>

```csharp
public string RecommenderFilterExpressionInput { get; }
```

- *Type:* string

---

##### `RecommenderFilterNameInput`<sup>Optional</sup> <a name="RecommenderFilterNameInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterNameInput"></a>

```csharp
public string RecommenderFilterNameInput { get; }
```

- *Type:* string

---

##### `RecommenderSchemaNameInput`<sup>Optional</sup> <a name="RecommenderSchemaNameInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaNameInput"></a>

```csharp
public string RecommenderSchemaNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tagsInput"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderFilterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `RecommenderFilterExpression`<sup>Required</sup> <a name="RecommenderFilterExpression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterExpression"></a>

```csharp
public string RecommenderFilterExpression { get; }
```

- *Type:* string

---

##### `RecommenderFilterName`<sup>Required</sup> <a name="RecommenderFilterName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderFilterName"></a>

```csharp
public string RecommenderFilterName { get; }
```

- *Type:* string

---

##### `RecommenderSchemaName`<sup>Required</sup> <a name="RecommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.recommenderSchemaName"></a>

```csharp
public string RecommenderSchemaName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderFilterConfig <a name="CustomerprofilesRecommenderFilterConfig" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string RecommenderFilterExpression,
    string RecommenderFilterName,
    string Description = null,
    string RecommenderSchemaName = null,
    IResolvable|CustomerprofilesRecommenderFilterTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.domainName">DomainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterExpression">RecommenderFilterExpression</a></code> | <code>string</code> | The filter expression that defines which items to include or exclude from recommendations. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterName">RecommenderFilterName</a></code> | <code>string</code> | The name of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.description">Description</a></code> | <code>string</code> | The description of the recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderSchemaName">RecommenderSchemaName</a></code> | <code>string</code> | The name of the recommender schema to use for this recommender filter. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#domain_name CustomerprofilesRecommenderFilter#domain_name}

---

##### `RecommenderFilterExpression`<sup>Required</sup> <a name="RecommenderFilterExpression" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterExpression"></a>

```csharp
public string RecommenderFilterExpression { get; set; }
```

- *Type:* string

The filter expression that defines which items to include or exclude from recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_expression CustomerprofilesRecommenderFilter#recommender_filter_expression}

---

##### `RecommenderFilterName`<sup>Required</sup> <a name="RecommenderFilterName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderFilterName"></a>

```csharp
public string RecommenderFilterName { get; set; }
```

- *Type:* string

The name of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#recommender_filter_name CustomerprofilesRecommenderFilter#recommender_filter_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the recommender filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#description CustomerprofilesRecommenderFilter#description}

---

##### `RecommenderSchemaName`<sup>Optional</sup> <a name="RecommenderSchemaName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.recommenderSchemaName"></a>

```csharp
public string RecommenderSchemaName { get; set; }
```

- *Type:* string

The name of the recommender schema to use for this recommender filter.

If not specified, the default schema is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#recommender_schema_name CustomerprofilesRecommenderFilter#recommender_schema_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterConfig.property.tags"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderFilterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#tags CustomerprofilesRecommenderFilter#tags}

---

### CustomerprofilesRecommenderFilterTags <a name="CustomerprofilesRecommenderFilterTags" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderFilterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#key CustomerprofilesRecommenderFilter#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/customerprofiles_recommender_filter#value CustomerprofilesRecommenderFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderFilterTagsList <a name="CustomerprofilesRecommenderFilterTagsList" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get"></a>

```csharp
private CustomerprofilesRecommenderFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderFilterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>[]

---


### CustomerprofilesRecommenderFilterTagsOutputReference <a name="CustomerprofilesRecommenderFilterTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderFilterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommenderFilter.CustomerprofilesRecommenderFilterTags">CustomerprofilesRecommenderFilterTags</a>

---



