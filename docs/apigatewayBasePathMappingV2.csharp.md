# `apigatewayBasePathMappingV2` Submodule <a name="`apigatewayBasePathMappingV2` Submodule" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayBasePathMappingV2 <a name="ApigatewayBasePathMappingV2" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2 awscc_apigateway_base_path_mapping_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayBasePathMappingV2(Construct Scope, string Id, ApigatewayBasePathMappingV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config">ApigatewayBasePathMappingV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config">ApigatewayBasePathMappingV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetBasePath">ResetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBasePath` <a name="ResetBasePath" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetBasePath"></a>

```csharp
private void ResetBasePath()
```

##### `ResetStage` <a name="ResetStage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.resetStage"></a>

```csharp
private void ResetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayBasePathMappingV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayBasePathMappingV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayBasePathMappingV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayBasePathMappingV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayBasePathMappingV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayBasePathMappingV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayBasePathMappingV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayBasePathMappingV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayBasePathMappingV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathMappingArn">BasePathMappingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathInput">BasePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArnInput">DomainNameArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePath">BasePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stage">Stage</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BasePathMappingArn`<sup>Required</sup> <a name="BasePathMappingArn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathMappingArn"></a>

```csharp
public string BasePathMappingArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `BasePathInput`<sup>Optional</sup> <a name="BasePathInput" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePathInput"></a>

```csharp
public string BasePathInput { get; }
```

- *Type:* string

---

##### `DomainNameArnInput`<sup>Optional</sup> <a name="DomainNameArnInput" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArnInput"></a>

```csharp
public string DomainNameArnInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `BasePath`<sup>Required</sup> <a name="BasePath" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.basePath"></a>

```csharp
public string BasePath { get; }
```

- *Type:* string

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayBasePathMappingV2Config <a name="ApigatewayBasePathMappingV2Config" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayBasePathMappingV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainNameArn,
    string RestApiId,
    string BasePath = null,
    string Stage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.domainNameArn">DomainNameArn</a></code> | <code>string</code> | The Arn of an AWS::ApiGateway::DomainNameV2 resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.restApiId">RestApiId</a></code> | <code>string</code> | The ID of the API. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.basePath">BasePath</a></code> | <code>string</code> | The base path name that callers of the API must provide in the URL after the domain name. |
| <code><a href="#@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.stage">Stage</a></code> | <code>string</code> | The name of the API's stage. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.domainNameArn"></a>

```csharp
public string DomainNameArn { get; set; }
```

- *Type:* string

The Arn of an AWS::ApiGateway::DomainNameV2 resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#domain_name_arn ApigatewayBasePathMappingV2#domain_name_arn}

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

The ID of the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#rest_api_id ApigatewayBasePathMappingV2#rest_api_id}

---

##### `BasePath`<sup>Optional</sup> <a name="BasePath" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.basePath"></a>

```csharp
public string BasePath { get; set; }
```

- *Type:* string

The base path name that callers of the API must provide in the URL after the domain name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#base_path ApigatewayBasePathMappingV2#base_path}

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayBasePathMappingV2.ApigatewayBasePathMappingV2Config.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

The name of the API's stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_base_path_mapping_v2#stage ApigatewayBasePathMappingV2#stage}

---



