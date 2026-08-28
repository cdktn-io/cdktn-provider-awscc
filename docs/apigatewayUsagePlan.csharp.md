# `apigatewayUsagePlan` Submodule <a name="`apigatewayUsagePlan` Submodule" id="@cdktn/provider-awscc.apigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigatewayUsagePlan <a name="ApigatewayUsagePlan" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan awscc_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlan(Construct Scope, string Id, ApigatewayUsagePlanConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig">ApigatewayUsagePlanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig">ApigatewayUsagePlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages">PutApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle">PutThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages">ResetApiStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle">ResetThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName">ResetUsagePlanName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApiStages` <a name="PutApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages"></a>

```csharp
private void PutApiStages(IResolvable|ApigatewayUsagePlanApiStages[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putApiStages.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

---

##### `PutQuota` <a name="PutQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota"></a>

```csharp
private void PutQuota(ApigatewayUsagePlanQuota Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags"></a>

```csharp
private void PutTags(IResolvable|ApigatewayUsagePlanTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

---

##### `PutThrottle` <a name="PutThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle"></a>

```csharp
private void PutThrottle(ApigatewayUsagePlanThrottle Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.putThrottle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `ResetApiStages` <a name="ResetApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetApiStages"></a>

```csharp
private void ResetApiStages()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetQuota"></a>

```csharp
private void ResetQuota()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetThrottle` <a name="ResetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetThrottle"></a>

```csharp
private void ResetThrottle()
```

##### `ResetUsagePlanName` <a name="ResetUsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.resetUsagePlanName"></a>

```csharp
private void ResetUsagePlanName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayUsagePlan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayUsagePlan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayUsagePlan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApigatewayUsagePlan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApigatewayUsagePlan resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigatewayUsagePlan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages">ApiStages</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota">Quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle">Throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId">UsagePlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput">ApiStagesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput">QuotaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput">ThrottleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput">UsagePlanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName">UsagePlanName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiStages`<sup>Required</sup> <a name="ApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStages"></a>

```csharp
public ApigatewayUsagePlanApiStagesList ApiStages { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList">ApigatewayUsagePlanApiStagesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quota"></a>

```csharp
public ApigatewayUsagePlanQuotaOutputReference Quota { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference">ApigatewayUsagePlanQuotaOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tags"></a>

```csharp
public ApigatewayUsagePlanTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList">ApigatewayUsagePlanTagsList</a>

---

##### `Throttle`<sup>Required</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttle"></a>

```csharp
public ApigatewayUsagePlanThrottleOutputReference Throttle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference">ApigatewayUsagePlanThrottleOutputReference</a>

---

##### `UsagePlanId`<sup>Required</sup> <a name="UsagePlanId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanId"></a>

```csharp
public string UsagePlanId { get; }
```

- *Type:* string

---

##### `ApiStagesInput`<sup>Optional</sup> <a name="ApiStagesInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.apiStagesInput"></a>

```csharp
public IResolvable|ApigatewayUsagePlanApiStages[] ApiStagesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.quotaInput"></a>

```csharp
public IResolvable|ApigatewayUsagePlanQuota QuotaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tagsInput"></a>

```csharp
public IResolvable|ApigatewayUsagePlanTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

---

##### `ThrottleInput`<sup>Optional</sup> <a name="ThrottleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.throttleInput"></a>

```csharp
public IResolvable|ApigatewayUsagePlanThrottle ThrottleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---

##### `UsagePlanNameInput`<sup>Optional</sup> <a name="UsagePlanNameInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanNameInput"></a>

```csharp
public string UsagePlanNameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `UsagePlanName`<sup>Required</sup> <a name="UsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.usagePlanName"></a>

```csharp
public string UsagePlanName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigatewayUsagePlanApiStages <a name="ApigatewayUsagePlanApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanApiStages {
    string ApiId = null,
    string Stage = null,
    IResolvable|System.Collections.Generic.IDictionary<string, ApigatewayUsagePlanApiStagesThrottle> Throttle = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId">ApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage">Stage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle">Throttle</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}. |

---

##### `ApiId`<sup>Optional</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.apiId"></a>

```csharp
public string ApiId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_id ApigatewayUsagePlan#api_id}.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.stage"></a>

```csharp
public string Stage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#stage ApigatewayUsagePlan#stage}.

---

##### `Throttle`<sup>Optional</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages.property.throttle"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, ApigatewayUsagePlanApiStagesThrottle> Throttle { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}.

---

### ApigatewayUsagePlanApiStagesThrottle <a name="ApigatewayUsagePlanApiStagesThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanApiStagesThrottle {
    double BurstLimit = null,
    double RateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit">BurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.burstLimit"></a>

```csharp
public double BurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

### ApigatewayUsagePlanConfig <a name="ApigatewayUsagePlanConfig" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ApigatewayUsagePlanApiStages[] ApiStages = null,
    string Description = null,
    ApigatewayUsagePlanQuota Quota = null,
    IResolvable|ApigatewayUsagePlanTags[] Tags = null,
    ApigatewayUsagePlanThrottle Throttle = null,
    string UsagePlanName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages">ApiStages</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota">Quota</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | ``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle">Throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | ``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName">UsagePlanName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApiStages`<sup>Optional</sup> <a name="ApiStages" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.apiStages"></a>

```csharp
public IResolvable|ApigatewayUsagePlanApiStages[] ApiStages { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#api_stages ApigatewayUsagePlan#api_stages}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#description ApigatewayUsagePlan#description}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.quota"></a>

```csharp
public ApigatewayUsagePlanQuota Quota { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

``QuotaSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies a target for the maximum number of requests users can make to your REST APIs.  In some cases clients can exceed the targets that you set. Don?t rely on usage plans to control costs. Consider using [](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) to monitor costs and [](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) to manage API requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#quota ApigatewayUsagePlan#quota}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.tags"></a>

```csharp
public IResolvable|ApigatewayUsagePlanTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#tags ApigatewayUsagePlan#tags}.

---

##### `Throttle`<sup>Optional</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.throttle"></a>

```csharp
public ApigatewayUsagePlanThrottle Throttle { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

``ThrottleSettings`` is a property of the [AWS::ApiGateway::UsagePlan](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-usageplan.html) resource that specifies the overall request rate (average requests per second) and burst capacity when users call your REST APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#throttle ApigatewayUsagePlan#throttle}

---

##### `UsagePlanName`<sup>Optional</sup> <a name="UsagePlanName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanConfig.property.usagePlanName"></a>

```csharp
public string UsagePlanName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#usage_plan_name ApigatewayUsagePlan#usage_plan_name}.

---

### ApigatewayUsagePlanQuota <a name="ApigatewayUsagePlanQuota" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanQuota {
    double Limit = null,
    double Offset = null,
    string Period = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit">Limit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset">Offset</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period">Period</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}. |

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#limit ApigatewayUsagePlan#limit}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.offset"></a>

```csharp
public double Offset { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#offset ApigatewayUsagePlan#offset}.

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#period ApigatewayUsagePlan#period}.

---

### ApigatewayUsagePlanTags <a name="ApigatewayUsagePlanTags" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key">Key</a></code> | <code>string</code> | A string you can use to assign a value. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value">Value</a></code> | <code>string</code> | The value for the specified tag key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

A string you can use to assign a value.

The combination of tag keys and values can help you organize and categorize your resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#key ApigatewayUsagePlan#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the specified tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#value ApigatewayUsagePlan#value}

---

### ApigatewayUsagePlanThrottle <a name="ApigatewayUsagePlanThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanThrottle {
    double BurstLimit = null,
    double RateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit">BurstLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}. |

---

##### `BurstLimit`<sup>Optional</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.burstLimit"></a>

```csharp
public double BurstLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#burst_limit ApigatewayUsagePlan#burst_limit}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apigateway_usage_plan#rate_limit ApigatewayUsagePlan#rate_limit}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigatewayUsagePlanApiStagesList <a name="ApigatewayUsagePlanApiStagesList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanApiStagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get"></a>

```csharp
private ApigatewayUsagePlanApiStagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanApiStages[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>[]

---


### ApigatewayUsagePlanApiStagesOutputReference <a name="ApigatewayUsagePlanApiStagesOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanApiStagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle">PutThrottle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId">ResetApiId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage">ResetStage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle">ResetThrottle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThrottle` <a name="PutThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle"></a>

```csharp
private void PutThrottle(IResolvable|System.Collections.Generic.IDictionary<string, ApigatewayUsagePlanApiStagesThrottle> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.putThrottle.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

---

##### `ResetApiId` <a name="ResetApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetApiId"></a>

```csharp
private void ResetApiId()
```

##### `ResetStage` <a name="ResetStage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetStage"></a>

```csharp
private void ResetStage()
```

##### `ResetThrottle` <a name="ResetThrottle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.resetThrottle"></a>

```csharp
private void ResetThrottle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle">Throttle</a></code> | <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput">ApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput">StageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput">ThrottleInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage">Stage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Throttle`<sup>Required</sup> <a name="Throttle" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttle"></a>

```csharp
public ApigatewayUsagePlanApiStagesThrottleMap Throttle { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap">ApigatewayUsagePlanApiStagesThrottleMap</a>

---

##### `ApiIdInput`<sup>Optional</sup> <a name="ApiIdInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiIdInput"></a>

```csharp
public string ApiIdInput { get; }
```

- *Type:* string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stageInput"></a>

```csharp
public string StageInput { get; }
```

- *Type:* string

---

##### `ThrottleInput`<sup>Optional</sup> <a name="ThrottleInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.throttleInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, ApigatewayUsagePlanApiStagesThrottle> ThrottleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.stage"></a>

```csharp
public string Stage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanApiStages InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStages">ApigatewayUsagePlanApiStages</a>

---


### ApigatewayUsagePlanApiStagesThrottleMap <a name="ApigatewayUsagePlanApiStagesThrottleMap" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanApiStagesThrottleMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get"></a>

```csharp
private ApigatewayUsagePlanApiStagesThrottleOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, ApigatewayUsagePlanApiStagesThrottle> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>>

---


### ApigatewayUsagePlanApiStagesThrottleOutputReference <a name="ApigatewayUsagePlanApiStagesThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanApiStagesThrottleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetBurstLimit"></a>

```csharp
private void ResetBurstLimit()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput">BurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit">BurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimitInput"></a>

```csharp
public double BurstLimitInput { get; }
```

- *Type:* double

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `BurstLimit`<sup>Required</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.burstLimit"></a>

```csharp
public double BurstLimit { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanApiStagesThrottle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanApiStagesThrottle">ApigatewayUsagePlanApiStagesThrottle</a>

---


### ApigatewayUsagePlanQuotaOutputReference <a name="ApigatewayUsagePlanQuotaOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanQuotaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLimit` <a name="ResetLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetOffset"></a>

```csharp
private void ResetOffset()
```

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput">OffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset">Offset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offsetInput"></a>

```csharp
public double OffsetInput { get; }
```

- *Type:* double

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.offset"></a>

```csharp
public double Offset { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuotaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanQuota InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanQuota">ApigatewayUsagePlanQuota</a>

---


### ApigatewayUsagePlanTagsList <a name="ApigatewayUsagePlanTagsList" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get"></a>

```csharp
private ApigatewayUsagePlanTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>[]

---


### ApigatewayUsagePlanTagsOutputReference <a name="ApigatewayUsagePlanTagsOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanTags">ApigatewayUsagePlanTags</a>

---


### ApigatewayUsagePlanThrottleOutputReference <a name="ApigatewayUsagePlanThrottleOutputReference" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApigatewayUsagePlanThrottleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit">ResetBurstLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBurstLimit` <a name="ResetBurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetBurstLimit"></a>

```csharp
private void ResetBurstLimit()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput">BurstLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit">BurstLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BurstLimitInput`<sup>Optional</sup> <a name="BurstLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimitInput"></a>

```csharp
public double BurstLimitInput { get; }
```

- *Type:* double

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `BurstLimit`<sup>Required</sup> <a name="BurstLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.burstLimit"></a>

```csharp
public double BurstLimit { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApigatewayUsagePlanThrottle InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apigatewayUsagePlan.ApigatewayUsagePlanThrottle">ApigatewayUsagePlanThrottle</a>

---



