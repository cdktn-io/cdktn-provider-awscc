# `customerprofilesRecommender` Submodule <a name="`customerprofilesRecommender` Submodule" id="@cdktn/provider-awscc.customerprofilesRecommender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesRecommender <a name="CustomerprofilesRecommender" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender awscc_customerprofiles_recommender}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommender(Construct Scope, string Id, CustomerprofilesRecommenderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig">CustomerprofilesRecommenderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig">CustomerprofilesRecommenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig">PutRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig">ResetRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRecommenderConfig` <a name="PutRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig"></a>

```csharp
private void PutRecommenderConfig(CustomerprofilesRecommenderRecommenderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putRecommenderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags"></a>

```csharp
private void PutTags(IResolvable|CustomerprofilesRecommenderTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRecommenderConfig` <a name="ResetRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetRecommenderConfig"></a>

```csharp
private void ResetRecommenderConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommender.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommender.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommender.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesRecommender.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesRecommender resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesRecommender to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesRecommender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesRecommender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate">LatestRecommenderUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn">RecommenderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig">RecommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics">TrainingMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput">RecommenderConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput">RecommenderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput">RecommenderRecipeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName">RecommenderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName">RecommenderRecipeName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `LatestRecommenderUpdate`<sup>Required</sup> <a name="LatestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.latestRecommenderUpdate"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference LatestRecommenderUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference</a>

---

##### `RecommenderArn`<sup>Required</sup> <a name="RecommenderArn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderArn"></a>

```csharp
public string RecommenderArn { get; }
```

- *Type:* string

---

##### `RecommenderConfig`<sup>Required</sup> <a name="RecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfig"></a>

```csharp
public CustomerprofilesRecommenderRecommenderConfigOutputReference RecommenderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tags"></a>

```csharp
public CustomerprofilesRecommenderTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList">CustomerprofilesRecommenderTagsList</a>

---

##### `TrainingMetrics`<sup>Required</sup> <a name="TrainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.trainingMetrics"></a>

```csharp
public CustomerprofilesRecommenderTrainingMetricsList TrainingMetrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList">CustomerprofilesRecommenderTrainingMetricsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `RecommenderConfigInput`<sup>Optional</sup> <a name="RecommenderConfigInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderConfigInput"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfig RecommenderConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---

##### `RecommenderNameInput`<sup>Optional</sup> <a name="RecommenderNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderNameInput"></a>

```csharp
public string RecommenderNameInput { get; }
```

- *Type:* string

---

##### `RecommenderRecipeNameInput`<sup>Optional</sup> <a name="RecommenderRecipeNameInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeNameInput"></a>

```csharp
public string RecommenderRecipeNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tagsInput"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `RecommenderName`<sup>Required</sup> <a name="RecommenderName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderName"></a>

```csharp
public string RecommenderName { get; }
```

- *Type:* string

---

##### `RecommenderRecipeName`<sup>Required</sup> <a name="RecommenderRecipeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.recommenderRecipeName"></a>

```csharp
public string RecommenderRecipeName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommender.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesRecommenderConfig <a name="CustomerprofilesRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    string RecommenderName,
    string RecommenderRecipeName,
    string Description = null,
    CustomerprofilesRecommenderRecommenderConfig RecommenderConfig = null,
    IResolvable|CustomerprofilesRecommenderTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName">DomainName</a></code> | <code>string</code> | The name of the domain for which the recommender will be created. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName">RecommenderName</a></code> | <code>string</code> | The name of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName">RecommenderRecipeName</a></code> | <code>string</code> | The name of the recommender recipe. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description">Description</a></code> | <code>string</code> | The description of the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig">RecommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | Configuration for the recommender. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]</code> | The tags used to organize, track, or control access for this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The name of the domain for which the recommender will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#domain_name CustomerprofilesRecommender#domain_name}

---

##### `RecommenderName`<sup>Required</sup> <a name="RecommenderName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderName"></a>

```csharp
public string RecommenderName { get; set; }
```

- *Type:* string

The name of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#recommender_name CustomerprofilesRecommender#recommender_name}

---

##### `RecommenderRecipeName`<sup>Required</sup> <a name="RecommenderRecipeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderRecipeName"></a>

```csharp
public string RecommenderRecipeName { get; set; }
```

- *Type:* string

The name of the recommender recipe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#recommender_recipe_name CustomerprofilesRecommender#recommender_recipe_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#description CustomerprofilesRecommender#description}

---

##### `RecommenderConfig`<sup>Optional</sup> <a name="RecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.recommenderConfig"></a>

```csharp
public CustomerprofilesRecommenderRecommenderConfig RecommenderConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

Configuration for the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#recommender_config CustomerprofilesRecommender#recommender_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderConfig.property.tags"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#tags CustomerprofilesRecommender#tags}

---

### CustomerprofilesRecommenderLatestRecommenderUpdate <a name="CustomerprofilesRecommenderLatestRecommenderUpdate" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdate {

};
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig {

};
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig {

};
```


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct {

};
```


### CustomerprofilesRecommenderRecommenderConfig <a name="CustomerprofilesRecommenderRecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfig {
    CustomerprofilesRecommenderRecommenderConfigEventsConfig EventsConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig">EventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | Configuration for events used in the recommender. |

---

##### `EventsConfig`<sup>Optional</sup> <a name="EventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig.property.eventsConfig"></a>

```csharp
public CustomerprofilesRecommenderRecommenderConfigEventsConfig EventsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

Configuration for events used in the recommender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#events_config CustomerprofilesRecommender#events_config}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfig <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfigEventsConfig {
    IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] EventParametersList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList">EventParametersList</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]</code> | List of event parameters with their value thresholds. |

---

##### `EventParametersList`<sup>Optional</sup> <a name="EventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig.property.eventParametersList"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] EventParametersList { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

List of event parameters with their value thresholds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#event_parameters_list CustomerprofilesRecommender#event_parameters_list}

---

### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct {
    string EventType = null,
    double EventValueThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType">EventType</a></code> | <code>string</code> | The type of event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold">EventValueThreshold</a></code> | <code>double</code> | The threshold of the event type. |

---

##### `EventType`<sup>Optional</sup> <a name="EventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventType"></a>

```csharp
public string EventType { get; set; }
```

- *Type:* string

The type of event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#event_type CustomerprofilesRecommender#event_type}

---

##### `EventValueThreshold`<sup>Optional</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct.property.eventValueThreshold"></a>

```csharp
public double EventValueThreshold { get; set; }
```

- *Type:* double

The threshold of the event type.

Only events with a value greater or equal to this threshold will be considered for solution creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#event_value_threshold CustomerprofilesRecommender#event_value_threshold}

---

### CustomerprofilesRecommenderTags <a name="CustomerprofilesRecommenderTags" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#key CustomerprofilesRecommender#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/customerprofiles_recommender#value CustomerprofilesRecommender#value}.

---

### CustomerprofilesRecommenderTrainingMetrics <a name="CustomerprofilesRecommenderTrainingMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTrainingMetrics {

};
```


### CustomerprofilesRecommenderTrainingMetricsMetrics <a name="CustomerprofilesRecommenderTrainingMetricsMetrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTrainingMetricsMetrics {

};
```


## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime">CreationDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason">FailureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime">LastUpdatedDateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig">RecommenderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreationDateTime`<sup>Required</sup> <a name="CreationDateTime" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.creationDateTime"></a>

```csharp
public string CreationDateTime { get; }
```

- *Type:* string

---

##### `FailureReason`<sup>Required</sup> <a name="FailureReason" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.failureReason"></a>

```csharp
public string FailureReason { get; }
```

- *Type:* string

---

##### `LastUpdatedDateTime`<sup>Required</sup> <a name="LastUpdatedDateTime" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.lastUpdatedDateTime"></a>

```csharp
public string LastUpdatedDateTime { get; }
```

- *Type:* string

---

##### `RecommenderConfig`<sup>Required</sup> <a name="RecommenderConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.recommenderConfig"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference RecommenderConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdate">CustomerprofilesRecommenderLatestRecommenderUpdate</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```csharp
private CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">EventValueThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `EventValueThreshold`<sup>Required</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```csharp
public double EventValueThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList">EventParametersList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventParametersList`<sup>Required</sup> <a name="EventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList EventParametersList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig">EventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsConfig`<sup>Required</sup> <a name="EventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.eventsConfig"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference EventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigEventsConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfigOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig">CustomerprofilesRecommenderLatestRecommenderUpdateRecommenderConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get"></a>

```csharp
private CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType">ResetEventType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold">ResetEventValueThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventType` <a name="ResetEventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventType"></a>

```csharp
private void ResetEventType()
```

##### `ResetEventValueThreshold` <a name="ResetEventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.resetEventValueThreshold"></a>

```csharp
private void ResetEventValueThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput">EventValueThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType">EventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold">EventValueThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventTypeInput"></a>

```csharp
public string EventTypeInput { get; }
```

- *Type:* string

---

##### `EventValueThresholdInput`<sup>Optional</sup> <a name="EventValueThresholdInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThresholdInput"></a>

```csharp
public double EventValueThresholdInput { get; }
```

- *Type:* double

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventType"></a>

```csharp
public string EventType { get; }
```

- *Type:* string

---

##### `EventValueThreshold`<sup>Required</sup> <a name="EventValueThreshold" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.eventValueThreshold"></a>

```csharp
public double EventValueThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>

---


### CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList">PutEventParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList">ResetEventParametersList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventParametersList` <a name="PutEventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList"></a>

```csharp
private void PutEventParametersList(IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.putEventParametersList.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

---

##### `ResetEventParametersList` <a name="ResetEventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.resetEventParametersList"></a>

```csharp
private void ResetEventParametersList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList">EventParametersList</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput">EventParametersListInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventParametersList`<sup>Required</sup> <a name="EventParametersList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersList"></a>

```csharp
public CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList EventParametersList { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStructList</a>

---

##### `EventParametersListInput`<sup>Optional</sup> <a name="EventParametersListInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.eventParametersListInput"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct[] EventParametersListInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct">CustomerprofilesRecommenderRecommenderConfigEventsConfigEventParametersListStruct</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---


### CustomerprofilesRecommenderRecommenderConfigOutputReference <a name="CustomerprofilesRecommenderRecommenderConfigOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderRecommenderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig">PutEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig">ResetEventsConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventsConfig` <a name="PutEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig"></a>

```csharp
private void PutEventsConfig(CustomerprofilesRecommenderRecommenderConfigEventsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.putEventsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---

##### `ResetEventsConfig` <a name="ResetEventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.resetEventsConfig"></a>

```csharp
private void ResetEventsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig">EventsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput">EventsConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventsConfig`<sup>Required</sup> <a name="EventsConfig" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfig"></a>

```csharp
public CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference EventsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference">CustomerprofilesRecommenderRecommenderConfigEventsConfigOutputReference</a>

---

##### `EventsConfigInput`<sup>Optional</sup> <a name="EventsConfigInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.eventsConfigInput"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfigEventsConfig EventsConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigEventsConfig">CustomerprofilesRecommenderRecommenderConfigEventsConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderRecommenderConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderRecommenderConfig">CustomerprofilesRecommenderRecommenderConfig</a>

---


### CustomerprofilesRecommenderTagsList <a name="CustomerprofilesRecommenderTagsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get"></a>

```csharp
private CustomerprofilesRecommenderTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>[]

---


### CustomerprofilesRecommenderTagsOutputReference <a name="CustomerprofilesRecommenderTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesRecommenderTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTags">CustomerprofilesRecommenderTags</a>

---


### CustomerprofilesRecommenderTrainingMetricsList <a name="CustomerprofilesRecommenderTrainingMetricsList" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTrainingMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get"></a>

```csharp
private CustomerprofilesRecommenderTrainingMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage">Coverage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness">Freshness</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit">Hit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity">Popularity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall">Recall</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity">Similarity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Coverage`<sup>Required</sup> <a name="Coverage" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.coverage"></a>

```csharp
public double Coverage { get; }
```

- *Type:* double

---

##### `Freshness`<sup>Required</sup> <a name="Freshness" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.freshness"></a>

```csharp
public double Freshness { get; }
```

- *Type:* double

---

##### `Hit`<sup>Required</sup> <a name="Hit" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.hit"></a>

```csharp
public double Hit { get; }
```

- *Type:* double

---

##### `Popularity`<sup>Required</sup> <a name="Popularity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.popularity"></a>

```csharp
public double Popularity { get; }
```

- *Type:* double

---

##### `Recall`<sup>Required</sup> <a name="Recall" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.recall"></a>

```csharp
public double Recall { get; }
```

- *Type:* double

---

##### `Similarity`<sup>Required</sup> <a name="Similarity" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.similarity"></a>

```csharp
public double Similarity { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesRecommenderTrainingMetricsMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetrics">CustomerprofilesRecommenderTrainingMetricsMetrics</a>

---


### CustomerprofilesRecommenderTrainingMetricsOutputReference <a name="CustomerprofilesRecommenderTrainingMetricsOutputReference" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesRecommenderTrainingMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics">Metrics</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time">Time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Metrics`<sup>Required</sup> <a name="Metrics" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.metrics"></a>

```csharp
public CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference Metrics { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference">CustomerprofilesRecommenderTrainingMetricsMetricsOutputReference</a>

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.time"></a>

```csharp
public string Time { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetricsOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesRecommenderTrainingMetrics InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesRecommender.CustomerprofilesRecommenderTrainingMetrics">CustomerprofilesRecommenderTrainingMetrics</a>

---



