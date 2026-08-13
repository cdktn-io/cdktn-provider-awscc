# `apigatewayDeployment` Submodule <a name="`apigatewayDeployment` Submodule" id="@cdktn/provider-awscc.apigatewayDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayDeployment <a name="ApigatewayDeployment" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment awscc_apigateway_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeployment(Construct Scope, string Id, ApigatewayDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig">ApigatewayDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig">ApigatewayDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings">PutDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription">PutStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings">ResetDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription">ResetStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName">ResetStageName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentCanarySettings` <a name="PutDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings"></a>

```csharp
private void PutDeploymentCanarySettings(ApigatewayDeploymentDeploymentCanarySettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putDeploymentCanarySettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `PutStageDescription` <a name="PutStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription"></a>

```csharp
private void PutStageDescription(ApigatewayDeploymentStageDescription Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.putStageDescription.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `ResetDeploymentCanarySettings` <a name="ResetDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDeploymentCanarySettings"></a>

```csharp
private void ResetDeploymentCanarySettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetStageDescription` <a name="ResetStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageDescription"></a>

```csharp
private void ResetStageDescription()
```

##### `ResetStageName` <a name="ResetStageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.resetStageName"></a>

```csharp
private void ResetStageName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings">DeploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription">StageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput">DeploymentCanarySettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput">RestApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput">StageDescriptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput">StageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId">RestApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName">StageName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DeploymentCanarySettings`<sup>Required</sup> <a name="DeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettings"></a>

```csharp
public ApigatewayDeploymentDeploymentCanarySettingsOutputReference DeploymentCanarySettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference">ApigatewayDeploymentDeploymentCanarySettingsOutputReference</a>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StageDescription`<sup>Required</sup> <a name="StageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescription"></a>

```csharp
public ApigatewayDeploymentStageDescriptionOutputReference StageDescription { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference">ApigatewayDeploymentStageDescriptionOutputReference</a>

---

##### `DeploymentCanarySettingsInput`<sup>Optional</sup> <a name="DeploymentCanarySettingsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.deploymentCanarySettingsInput"></a>

```csharp
public IResolvable|ApigatewayDeploymentDeploymentCanarySettings DeploymentCanarySettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RestApiIdInput`<sup>Optional</sup> <a name="RestApiIdInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiIdInput"></a>

```csharp
public string RestApiIdInput { get; }
```

- *Type:* string

---

##### `StageDescriptionInput`<sup>Optional</sup> <a name="StageDescriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageDescriptionInput"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescription StageDescriptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---

##### `StageNameInput`<sup>Optional</sup> <a name="StageNameInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageNameInput"></a>

```csharp
public string StageNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.restApiId"></a>

```csharp
public string RestApiId { get; }
```

- *Type:* string

---

##### `StageName`<sup>Required</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.stageName"></a>

```csharp
public string StageName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayDeploymentConfig <a name="ApigatewayDeploymentConfig" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string RestApiId,
    ApigatewayDeploymentDeploymentCanarySettings DeploymentCanarySettings = null,
    string Description = null,
    ApigatewayDeploymentStageDescription StageDescription = null,
    string StageName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId">RestApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings">DeploymentCanarySettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription">StageDescription</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | The description of the Stage resource for the Deployment resource to create. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName">StageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `RestApiId`<sup>Required</sup> <a name="RestApiId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.restApiId"></a>

```csharp
public string RestApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#rest_api_id ApigatewayDeployment#rest_api_id}.

---

##### `DeploymentCanarySettings`<sup>Optional</sup> <a name="DeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.deploymentCanarySettings"></a>

```csharp
public ApigatewayDeploymentDeploymentCanarySettings DeploymentCanarySettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

The ``DeploymentCanarySettings`` property type specifies settings for the canary deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#deployment_canary_settings ApigatewayDeployment#deployment_canary_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}.

---

##### `StageDescription`<sup>Optional</sup> <a name="StageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageDescription"></a>

```csharp
public ApigatewayDeploymentStageDescription StageDescription { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

The description of the Stage resource for the Deployment resource to create.

To specify a stage description, you must also provide a stage name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_description ApigatewayDeployment#stage_description}

---

##### `StageName`<sup>Optional</sup> <a name="StageName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentConfig.property.stageName"></a>

```csharp
public string StageName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_name ApigatewayDeployment#stage_name}.

---

### ApigatewayDeploymentDeploymentCanarySettings <a name="ApigatewayDeploymentDeploymentCanarySettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentDeploymentCanarySettings {
    double PercentTraffic = null,
    System.Collections.Generic.IDictionary<string, string> StageVariableOverrides = null,
    bool|IResolvable UseStageCache = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache">UseStageCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `PercentTraffic`<sup>Optional</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `StageVariableOverrides`<sup>Optional</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `UseStageCache`<sup>Optional</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings.property.useStageCache"></a>

```csharp
public bool|IResolvable UseStageCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescription <a name="ApigatewayDeploymentStageDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescription {
    ApigatewayDeploymentStageDescriptionAccessLogSetting AccessLogSetting = null,
    bool|IResolvable CacheClusterEnabled = null,
    string CacheClusterSize = null,
    bool|IResolvable CacheDataEncrypted = null,
    double CacheTtlInSeconds = null,
    bool|IResolvable CachingEnabled = null,
    ApigatewayDeploymentStageDescriptionCanarySetting CanarySetting = null,
    string ClientCertificateId = null,
    bool|IResolvable DataTraceEnabled = null,
    string Description = null,
    string DocumentationVersion = null,
    string LoggingLevel = null,
    IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings[] MethodSettings = null,
    bool|IResolvable MetricsEnabled = null,
    IResolvable|ApigatewayDeploymentStageDescriptionTags[] Tags = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null,
    bool|IResolvable TracingEnabled = null,
    System.Collections.Generic.IDictionary<string, string> Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting">AccessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | Specifies settings for logging access in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the cached responses are encrypted. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled">CachingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether responses are cached and returned for requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting">CanarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | Specifies settings for the canary deployment in this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether data trace logging is enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description">Description</a></code> | <code>string</code> | A description of the purpose of the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | The version identifier of the API documentation snapshot. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | The logging level for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings">MethodSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]</code> | Configures settings for all of the stage's methods. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]</code> | An array of arbitrary tags (key-value pairs) to associate with the stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | The target request burst rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | The target request steady-state rate limit. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled">TracingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether active tracing with X-ray is enabled for this stage. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A map that defines the stage variables. |

---

##### `AccessLogSetting`<sup>Optional</sup> <a name="AccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.accessLogSetting"></a>

```csharp
public ApigatewayDeploymentStageDescriptionAccessLogSetting AccessLogSetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

Specifies settings for logging access in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#access_log_setting ApigatewayDeployment#access_log_setting}

---

##### `CacheClusterEnabled`<sup>Optional</sup> <a name="CacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterEnabled"></a>

```csharp
public bool|IResolvable CacheClusterEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_cluster_enabled ApigatewayDeployment#cache_cluster_enabled}.

---

##### `CacheClusterSize`<sup>Optional</sup> <a name="CacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; set; }
```

- *Type:* string

The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_cluster_size ApigatewayDeployment#cache_cluster_size}

---

##### `CacheDataEncrypted`<sup>Optional</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheDataEncrypted"></a>

```csharp
public bool|IResolvable CacheDataEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the cached responses are encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}

---

##### `CacheTtlInSeconds`<sup>Optional</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; set; }
```

- *Type:* double

The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}

---

##### `CachingEnabled`<sup>Optional</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.cachingEnabled"></a>

```csharp
public bool|IResolvable CachingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether responses are cached and returned for requests.

You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}

---

##### `CanarySetting`<sup>Optional</sup> <a name="CanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.canarySetting"></a>

```csharp
public ApigatewayDeploymentStageDescriptionCanarySetting CanarySetting { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

Specifies settings for the canary deployment in this stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#canary_setting ApigatewayDeployment#canary_setting}

---

##### `ClientCertificateId`<sup>Optional</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; set; }
```

- *Type:* string

The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#client_certificate_id ApigatewayDeployment#client_certificate_id}

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether data trace logging is enabled for methods in the stage.

API Gateway pushes these logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the purpose of the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#description ApigatewayDeployment#description}

---

##### `DocumentationVersion`<sup>Optional</sup> <a name="DocumentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; set; }
```

- *Type:* string

The version identifier of the API documentation snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#documentation_version ApigatewayDeployment#documentation_version}

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

The logging level for this method.

For valid values, see the `loggingLevel` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}

---

##### `MethodSettings`<sup>Optional</sup> <a name="MethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.methodSettings"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings[] MethodSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

Configures settings for all of the stage's methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#method_settings ApigatewayDeployment#method_settings}

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tags"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

An array of arbitrary tags (key-value pairs) to associate with the stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#tags ApigatewayDeployment#tags}

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

The target request burst rate limit.

This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

The target request steady-state rate limit.

For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}

---

##### `TracingEnabled`<sup>Optional</sup> <a name="TracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.tracingEnabled"></a>

```csharp
public bool|IResolvable TracingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether active tracing with X-ray is enabled for this stage.

For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#tracing_enabled ApigatewayDeployment#tracing_enabled}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A map that defines the stage variables.

Variable names must consist of alphanumeric characters, and the values must match the following regular expression: `[A-Za-z0-9-._~:/?#&=,]+`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#variables ApigatewayDeployment#variables}

---

### ApigatewayDeploymentStageDescriptionAccessLogSetting <a name="ApigatewayDeploymentStageDescriptionAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionAccessLogSetting {
    string DestinationArn = null,
    string Format = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn">DestinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format">Format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}. |

---

##### `DestinationArn`<sup>Optional</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.destinationArn"></a>

```csharp
public string DestinationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#destination_arn ApigatewayDeployment#destination_arn}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#format ApigatewayDeployment#format}.

---

### ApigatewayDeploymentStageDescriptionCanarySetting <a name="ApigatewayDeploymentStageDescriptionCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionCanarySetting {
    double PercentTraffic = null,
    System.Collections.Generic.IDictionary<string, string> StageVariableOverrides = null,
    bool|IResolvable UseStageCache = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache">UseStageCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}. |

---

##### `PercentTraffic`<sup>Optional</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#percent_traffic ApigatewayDeployment#percent_traffic}.

---

##### `StageVariableOverrides`<sup>Optional</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#stage_variable_overrides ApigatewayDeployment#stage_variable_overrides}.

---

##### `UseStageCache`<sup>Optional</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting.property.useStageCache"></a>

```csharp
public bool|IResolvable UseStageCache { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#use_stage_cache ApigatewayDeployment#use_stage_cache}.

---

### ApigatewayDeploymentStageDescriptionMethodSettings <a name="ApigatewayDeploymentStageDescriptionMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionMethodSettings {
    bool|IResolvable CacheDataEncrypted = null,
    double CacheTtlInSeconds = null,
    bool|IResolvable CachingEnabled = null,
    bool|IResolvable DataTraceEnabled = null,
    string HttpMethod = null,
    string LoggingLevel = null,
    bool|IResolvable MetricsEnabled = null,
    string ResourcePath = null,
    double ThrottlingBurstLimit = null,
    double ThrottlingRateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled">CachingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod">HttpMethod</a></code> | <code>string</code> | The HTTP method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath">ResourcePath</a></code> | <code>string</code> | The resource path for this method. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}. |

---

##### `CacheDataEncrypted`<sup>Optional</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheDataEncrypted"></a>

```csharp
public bool|IResolvable CacheDataEncrypted { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_data_encrypted ApigatewayDeployment#cache_data_encrypted}.

---

##### `CacheTtlInSeconds`<sup>Optional</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#cache_ttl_in_seconds ApigatewayDeployment#cache_ttl_in_seconds}.

---

##### `CachingEnabled`<sup>Optional</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.cachingEnabled"></a>

```csharp
public bool|IResolvable CachingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#caching_enabled ApigatewayDeployment#caching_enabled}.

---

##### `DataTraceEnabled`<sup>Optional</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#data_trace_enabled ApigatewayDeployment#data_trace_enabled}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

The HTTP method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#http_method ApigatewayDeployment#http_method}

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#logging_level ApigatewayDeployment#logging_level}.

---

##### `MetricsEnabled`<sup>Optional</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#metrics_enabled ApigatewayDeployment#metrics_enabled}.

---

##### `ResourcePath`<sup>Optional</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.resourcePath"></a>

```csharp
public string ResourcePath { get; set; }
```

- *Type:* string

The resource path for this method.

Forward slashes (`/`) are encoded as `~1` and the initial slash must include a forward slash. For example, the path value `/resource/subresource` must be encoded as `/~1resource~1subresource`. To specify the root path, use only a slash (`/`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#resource_path ApigatewayDeployment#resource_path}

---

##### `ThrottlingBurstLimit`<sup>Optional</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_burst_limit ApigatewayDeployment#throttling_burst_limit}.

---

##### `ThrottlingRateLimit`<sup>Optional</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#throttling_rate_limit ApigatewayDeployment#throttling_rate_limit}.

---

### ApigatewayDeploymentStageDescriptionTags <a name="ApigatewayDeploymentStageDescriptionTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key">Key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#key ApigatewayDeployment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/apigateway_deployment#value ApigatewayDeployment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayDeploymentDeploymentCanarySettingsOutputReference <a name="ApigatewayDeploymentDeploymentCanarySettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentDeploymentCanarySettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic">ResetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides">ResetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache">ResetUseStageCache</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercentTraffic` <a name="ResetPercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetPercentTraffic"></a>

```csharp
private void ResetPercentTraffic()
```

##### `ResetStageVariableOverrides` <a name="ResetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetStageVariableOverrides"></a>

```csharp
private void ResetStageVariableOverrides()
```

##### `ResetUseStageCache` <a name="ResetUseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.resetUseStageCache"></a>

```csharp
private void ResetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput">PercentTrafficInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput">StageVariableOverridesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput">UseStageCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache">UseStageCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentTrafficInput`<sup>Optional</sup> <a name="PercentTrafficInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTrafficInput"></a>

```csharp
public double PercentTrafficInput { get; }
```

- *Type:* double

---

##### `StageVariableOverridesInput`<sup>Optional</sup> <a name="StageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverridesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverridesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCacheInput`<sup>Optional</sup> <a name="UseStageCacheInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCacheInput"></a>

```csharp
public bool|IResolvable UseStageCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.useStageCache"></a>

```csharp
public bool|IResolvable UseStageCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentDeploymentCanarySettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentDeploymentCanarySettings">ApigatewayDeploymentDeploymentCanarySettings</a>

---


### ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference <a name="ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn">ResetDestinationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationArn` <a name="ResetDestinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetDestinationArn"></a>

```csharp
private void ResetDestinationArn()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput">DestinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn">DestinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationArnInput`<sup>Optional</sup> <a name="DestinationArnInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArnInput"></a>

```csharp
public string DestinationArnInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `DestinationArn`<sup>Required</sup> <a name="DestinationArn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.destinationArn"></a>

```csharp
public string DestinationArn { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionAccessLogSetting InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---


### ApigatewayDeploymentStageDescriptionCanarySettingOutputReference <a name="ApigatewayDeploymentStageDescriptionCanarySettingOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionCanarySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic">ResetPercentTraffic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides">ResetStageVariableOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache">ResetUseStageCache</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPercentTraffic` <a name="ResetPercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetPercentTraffic"></a>

```csharp
private void ResetPercentTraffic()
```

##### `ResetStageVariableOverrides` <a name="ResetStageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetStageVariableOverrides"></a>

```csharp
private void ResetStageVariableOverrides()
```

##### `ResetUseStageCache` <a name="ResetUseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.resetUseStageCache"></a>

```csharp
private void ResetUseStageCache()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput">PercentTrafficInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput">StageVariableOverridesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput">UseStageCacheInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic">PercentTraffic</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides">StageVariableOverrides</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache">UseStageCache</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PercentTrafficInput`<sup>Optional</sup> <a name="PercentTrafficInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTrafficInput"></a>

```csharp
public double PercentTrafficInput { get; }
```

- *Type:* double

---

##### `StageVariableOverridesInput`<sup>Optional</sup> <a name="StageVariableOverridesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverridesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverridesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCacheInput`<sup>Optional</sup> <a name="UseStageCacheInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCacheInput"></a>

```csharp
public bool|IResolvable UseStageCacheInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PercentTraffic`<sup>Required</sup> <a name="PercentTraffic" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.percentTraffic"></a>

```csharp
public double PercentTraffic { get; }
```

- *Type:* double

---

##### `StageVariableOverrides`<sup>Required</sup> <a name="StageVariableOverrides" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.stageVariableOverrides"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> StageVariableOverrides { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UseStageCache`<sup>Required</sup> <a name="UseStageCache" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.useStageCache"></a>

```csharp
public bool|IResolvable UseStageCache { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionCanarySetting InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---


### ApigatewayDeploymentStageDescriptionMethodSettingsList <a name="ApigatewayDeploymentStageDescriptionMethodSettingsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionMethodSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get"></a>

```csharp
private ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

---


### ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference <a name="ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted">ResetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds">ResetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled">ResetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath">ResetResourcePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCacheDataEncrypted` <a name="ResetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheDataEncrypted"></a>

```csharp
private void ResetCacheDataEncrypted()
```

##### `ResetCacheTtlInSeconds` <a name="ResetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCacheTtlInSeconds"></a>

```csharp
private void ResetCacheTtlInSeconds()
```

##### `ResetCachingEnabled` <a name="ResetCachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetCachingEnabled"></a>

```csharp
private void ResetCachingEnabled()
```

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetMetricsEnabled"></a>

```csharp
private void ResetMetricsEnabled()
```

##### `ResetResourcePath` <a name="ResetResourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetResourcePath"></a>

```csharp
private void ResetResourcePath()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput">CacheDataEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput">CacheTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput">CachingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput">ResourcePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled">CachingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath">ResourcePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CacheDataEncryptedInput`<sup>Optional</sup> <a name="CacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncryptedInput"></a>

```csharp
public bool|IResolvable CacheDataEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheTtlInSecondsInput`<sup>Optional</sup> <a name="CacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSecondsInput"></a>

```csharp
public double CacheTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `CachingEnabledInput`<sup>Optional</sup> <a name="CachingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabledInput"></a>

```csharp
public bool|IResolvable CachingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public bool|IResolvable DataTraceEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabledInput"></a>

```csharp
public bool|IResolvable MetricsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcePathInput`<sup>Optional</sup> <a name="ResourcePathInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePathInput"></a>

```csharp
public string ResourcePathInput { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `CacheDataEncrypted`<sup>Required</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheDataEncrypted"></a>

```csharp
public bool|IResolvable CacheDataEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheTtlInSeconds`<sup>Required</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; }
```

- *Type:* double

---

##### `CachingEnabled`<sup>Required</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.cachingEnabled"></a>

```csharp
public bool|IResolvable CachingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ResourcePath`<sup>Required</sup> <a name="ResourcePath" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.resourcePath"></a>

```csharp
public string ResourcePath { get; }
```

- *Type:* string

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>

---


### ApigatewayDeploymentStageDescriptionOutputReference <a name="ApigatewayDeploymentStageDescriptionOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting">PutAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting">PutCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings">PutMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting">ResetAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled">ResetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize">ResetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted">ResetCacheDataEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds">ResetCacheTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled">ResetCachingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting">ResetCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId">ResetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled">ResetDataTraceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion">ResetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings">ResetMethodSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled">ResetMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit">ResetThrottlingBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit">ResetThrottlingRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled">ResetTracingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAccessLogSetting` <a name="PutAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting"></a>

```csharp
private void PutAccessLogSetting(ApigatewayDeploymentStageDescriptionAccessLogSetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putAccessLogSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `PutCanarySetting` <a name="PutCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting"></a>

```csharp
private void PutCanarySetting(ApigatewayDeploymentStageDescriptionCanarySetting Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putCanarySetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `PutMethodSettings` <a name="PutMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings"></a>

```csharp
private void PutMethodSettings(IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putMethodSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|ApigatewayDeploymentStageDescriptionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

---

##### `ResetAccessLogSetting` <a name="ResetAccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetAccessLogSetting"></a>

```csharp
private void ResetAccessLogSetting()
```

##### `ResetCacheClusterEnabled` <a name="ResetCacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterEnabled"></a>

```csharp
private void ResetCacheClusterEnabled()
```

##### `ResetCacheClusterSize` <a name="ResetCacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheClusterSize"></a>

```csharp
private void ResetCacheClusterSize()
```

##### `ResetCacheDataEncrypted` <a name="ResetCacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheDataEncrypted"></a>

```csharp
private void ResetCacheDataEncrypted()
```

##### `ResetCacheTtlInSeconds` <a name="ResetCacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCacheTtlInSeconds"></a>

```csharp
private void ResetCacheTtlInSeconds()
```

##### `ResetCachingEnabled` <a name="ResetCachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCachingEnabled"></a>

```csharp
private void ResetCachingEnabled()
```

##### `ResetCanarySetting` <a name="ResetCanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetCanarySetting"></a>

```csharp
private void ResetCanarySetting()
```

##### `ResetClientCertificateId` <a name="ResetClientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetClientCertificateId"></a>

```csharp
private void ResetClientCertificateId()
```

##### `ResetDataTraceEnabled` <a name="ResetDataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDataTraceEnabled"></a>

```csharp
private void ResetDataTraceEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDocumentationVersion` <a name="ResetDocumentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetDocumentationVersion"></a>

```csharp
private void ResetDocumentationVersion()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetMethodSettings` <a name="ResetMethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMethodSettings"></a>

```csharp
private void ResetMethodSettings()
```

##### `ResetMetricsEnabled` <a name="ResetMetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetMetricsEnabled"></a>

```csharp
private void ResetMetricsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThrottlingBurstLimit` <a name="ResetThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingBurstLimit"></a>

```csharp
private void ResetThrottlingBurstLimit()
```

##### `ResetThrottlingRateLimit` <a name="ResetThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetThrottlingRateLimit"></a>

```csharp
private void ResetThrottlingRateLimit()
```

##### `ResetTracingEnabled` <a name="ResetTracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetTracingEnabled"></a>

```csharp
private void ResetTracingEnabled()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.resetVariables"></a>

```csharp
private void ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting">AccessLogSetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting">CanarySetting</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings">MethodSettings</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput">AccessLogSettingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput">CacheClusterEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput">CacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput">CacheDataEncryptedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput">CacheTtlInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput">CachingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput">CanarySettingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput">ClientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput">DataTraceEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput">DocumentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput">MethodSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput">MetricsEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput">ThrottlingBurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput">ThrottlingRateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput">TracingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput">VariablesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled">CacheClusterEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize">CacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted">CacheDataEncrypted</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds">CacheTtlInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled">CachingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId">ClientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled">DataTraceEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion">DocumentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled">MetricsEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit">ThrottlingBurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit">ThrottlingRateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled">TracingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables">Variables</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessLogSetting`<sup>Required</sup> <a name="AccessLogSetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSetting"></a>

```csharp
public ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference AccessLogSetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference">ApigatewayDeploymentStageDescriptionAccessLogSettingOutputReference</a>

---

##### `CanarySetting`<sup>Required</sup> <a name="CanarySetting" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySetting"></a>

```csharp
public ApigatewayDeploymentStageDescriptionCanarySettingOutputReference CanarySetting { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySettingOutputReference">ApigatewayDeploymentStageDescriptionCanarySettingOutputReference</a>

---

##### `MethodSettings`<sup>Required</sup> <a name="MethodSettings" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettings"></a>

```csharp
public ApigatewayDeploymentStageDescriptionMethodSettingsList MethodSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettingsList">ApigatewayDeploymentStageDescriptionMethodSettingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tags"></a>

```csharp
public ApigatewayDeploymentStageDescriptionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList">ApigatewayDeploymentStageDescriptionTagsList</a>

---

##### `AccessLogSettingInput`<sup>Optional</sup> <a name="AccessLogSettingInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.accessLogSettingInput"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionAccessLogSetting AccessLogSettingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionAccessLogSetting">ApigatewayDeploymentStageDescriptionAccessLogSetting</a>

---

##### `CacheClusterEnabledInput`<sup>Optional</sup> <a name="CacheClusterEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabledInput"></a>

```csharp
public bool|IResolvable CacheClusterEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheClusterSizeInput`<sup>Optional</sup> <a name="CacheClusterSizeInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSizeInput"></a>

```csharp
public string CacheClusterSizeInput { get; }
```

- *Type:* string

---

##### `CacheDataEncryptedInput`<sup>Optional</sup> <a name="CacheDataEncryptedInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncryptedInput"></a>

```csharp
public bool|IResolvable CacheDataEncryptedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheTtlInSecondsInput`<sup>Optional</sup> <a name="CacheTtlInSecondsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSecondsInput"></a>

```csharp
public double CacheTtlInSecondsInput { get; }
```

- *Type:* double

---

##### `CachingEnabledInput`<sup>Optional</sup> <a name="CachingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabledInput"></a>

```csharp
public bool|IResolvable CachingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CanarySettingInput`<sup>Optional</sup> <a name="CanarySettingInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.canarySettingInput"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionCanarySetting CanarySettingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionCanarySetting">ApigatewayDeploymentStageDescriptionCanarySetting</a>

---

##### `ClientCertificateIdInput`<sup>Optional</sup> <a name="ClientCertificateIdInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateIdInput"></a>

```csharp
public string ClientCertificateIdInput { get; }
```

- *Type:* string

---

##### `DataTraceEnabledInput`<sup>Optional</sup> <a name="DataTraceEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabledInput"></a>

```csharp
public bool|IResolvable DataTraceEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DocumentationVersionInput`<sup>Optional</sup> <a name="DocumentationVersionInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersionInput"></a>

```csharp
public string DocumentationVersionInput { get; }
```

- *Type:* string

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `MethodSettingsInput`<sup>Optional</sup> <a name="MethodSettingsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.methodSettingsInput"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionMethodSettings[] MethodSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionMethodSettings">ApigatewayDeploymentStageDescriptionMethodSettings</a>[]

---

##### `MetricsEnabledInput`<sup>Optional</sup> <a name="MetricsEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabledInput"></a>

```csharp
public bool|IResolvable MetricsEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

---

##### `ThrottlingBurstLimitInput`<sup>Optional</sup> <a name="ThrottlingBurstLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimitInput"></a>

```csharp
public double ThrottlingBurstLimitInput { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimitInput`<sup>Optional</sup> <a name="ThrottlingRateLimitInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimitInput"></a>

```csharp
public double ThrottlingRateLimitInput { get; }
```

- *Type:* double

---

##### `TracingEnabledInput`<sup>Optional</sup> <a name="TracingEnabledInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabledInput"></a>

```csharp
public bool|IResolvable TracingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variablesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariablesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CacheClusterEnabled`<sup>Required</sup> <a name="CacheClusterEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterEnabled"></a>

```csharp
public bool|IResolvable CacheClusterEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheClusterSize`<sup>Required</sup> <a name="CacheClusterSize" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheClusterSize"></a>

```csharp
public string CacheClusterSize { get; }
```

- *Type:* string

---

##### `CacheDataEncrypted`<sup>Required</sup> <a name="CacheDataEncrypted" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheDataEncrypted"></a>

```csharp
public bool|IResolvable CacheDataEncrypted { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheTtlInSeconds`<sup>Required</sup> <a name="CacheTtlInSeconds" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cacheTtlInSeconds"></a>

```csharp
public double CacheTtlInSeconds { get; }
```

- *Type:* double

---

##### `CachingEnabled`<sup>Required</sup> <a name="CachingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.cachingEnabled"></a>

```csharp
public bool|IResolvable CachingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientCertificateId`<sup>Required</sup> <a name="ClientCertificateId" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.clientCertificateId"></a>

```csharp
public string ClientCertificateId { get; }
```

- *Type:* string

---

##### `DataTraceEnabled`<sup>Required</sup> <a name="DataTraceEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.dataTraceEnabled"></a>

```csharp
public bool|IResolvable DataTraceEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DocumentationVersion`<sup>Required</sup> <a name="DocumentationVersion" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.documentationVersion"></a>

```csharp
public string DocumentationVersion { get; }
```

- *Type:* string

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `MetricsEnabled`<sup>Required</sup> <a name="MetricsEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.metricsEnabled"></a>

```csharp
public bool|IResolvable MetricsEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ThrottlingBurstLimit`<sup>Required</sup> <a name="ThrottlingBurstLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingBurstLimit"></a>

```csharp
public double ThrottlingBurstLimit { get; }
```

- *Type:* double

---

##### `ThrottlingRateLimit`<sup>Required</sup> <a name="ThrottlingRateLimit" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.throttlingRateLimit"></a>

```csharp
public double ThrottlingRateLimit { get; }
```

- *Type:* double

---

##### `TracingEnabled`<sup>Required</sup> <a name="TracingEnabled" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.tracingEnabled"></a>

```csharp
public bool|IResolvable TracingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.variables"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variables { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescription InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescription">ApigatewayDeploymentStageDescription</a>

---


### ApigatewayDeploymentStageDescriptionTagsList <a name="ApigatewayDeploymentStageDescriptionTagsList" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get"></a>

```csharp
private ApigatewayDeploymentStageDescriptionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>[]

---


### ApigatewayDeploymentStageDescriptionTagsOutputReference <a name="ApigatewayDeploymentStageDescriptionTagsOutputReference" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayDeploymentStageDescriptionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayDeploymentStageDescriptionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayDeployment.ApigatewayDeploymentStageDescriptionTags">ApigatewayDeploymentStageDescriptionTags</a>

---



