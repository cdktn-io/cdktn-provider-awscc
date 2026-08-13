# `bedrockIntelligentPromptRouter` Submodule <a name="`bedrockIntelligentPromptRouter` Submodule" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockIntelligentPromptRouter <a name="BedrockIntelligentPromptRouter" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router awscc_bedrock_intelligent_prompt_router}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouter(Construct Scope, string Id, BedrockIntelligentPromptRouterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig">BedrockIntelligentPromptRouterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig">BedrockIntelligentPromptRouterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel">PutFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels">PutModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria">PutRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFallbackModel` <a name="PutFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel"></a>

```csharp
private void PutFallbackModel(BedrockIntelligentPromptRouterFallbackModel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putFallbackModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `PutModels` <a name="PutModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels"></a>

```csharp
private void PutModels(IResolvable|BedrockIntelligentPromptRouterModels[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putModels.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

---

##### `PutRoutingCriteria` <a name="PutRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria"></a>

```csharp
private void PutRoutingCriteria(BedrockIntelligentPromptRouterRoutingCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putRoutingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags"></a>

```csharp
private void PutTags(IResolvable|BedrockIntelligentPromptRouterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockIntelligentPromptRouter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockIntelligentPromptRouter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockIntelligentPromptRouter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockIntelligentPromptRouter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockIntelligentPromptRouter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockIntelligentPromptRouter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockIntelligentPromptRouter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockIntelligentPromptRouter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel">FallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models">Models</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn">PromptRouterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria">RoutingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput">FallbackModelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput">ModelsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput">PromptRouterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput">RoutingCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName">PromptRouterName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `FallbackModel`<sup>Required</sup> <a name="FallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModel"></a>

```csharp
public BedrockIntelligentPromptRouterFallbackModelOutputReference FallbackModel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference">BedrockIntelligentPromptRouterFallbackModelOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.models"></a>

```csharp
public BedrockIntelligentPromptRouterModelsList Models { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList">BedrockIntelligentPromptRouterModelsList</a>

---

##### `PromptRouterArn`<sup>Required</sup> <a name="PromptRouterArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterArn"></a>

```csharp
public string PromptRouterArn { get; }
```

- *Type:* string

---

##### `RoutingCriteria`<sup>Required</sup> <a name="RoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteria"></a>

```csharp
public BedrockIntelligentPromptRouterRoutingCriteriaOutputReference RoutingCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference">BedrockIntelligentPromptRouterRoutingCriteriaOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tags"></a>

```csharp
public BedrockIntelligentPromptRouterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList">BedrockIntelligentPromptRouterTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FallbackModelInput`<sup>Optional</sup> <a name="FallbackModelInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.fallbackModelInput"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterFallbackModel FallbackModelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---

##### `ModelsInput`<sup>Optional</sup> <a name="ModelsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.modelsInput"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterModels[] ModelsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

---

##### `PromptRouterNameInput`<sup>Optional</sup> <a name="PromptRouterNameInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterNameInput"></a>

```csharp
public string PromptRouterNameInput { get; }
```

- *Type:* string

---

##### `RoutingCriteriaInput`<sup>Optional</sup> <a name="RoutingCriteriaInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.routingCriteriaInput"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterRoutingCriteria RoutingCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tagsInput"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PromptRouterName`<sup>Required</sup> <a name="PromptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.promptRouterName"></a>

```csharp
public string PromptRouterName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockIntelligentPromptRouterConfig <a name="BedrockIntelligentPromptRouterConfig" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BedrockIntelligentPromptRouterFallbackModel FallbackModel,
    IResolvable|BedrockIntelligentPromptRouterModels[] Models,
    string PromptRouterName,
    BedrockIntelligentPromptRouterRoutingCriteria RoutingCriteria,
    string Description = null,
    IResolvable|BedrockIntelligentPromptRouterTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel">FallbackModel</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | Model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models">Models</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]</code> | List of model configuration. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName">PromptRouterName</a></code> | <code>string</code> | Name of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria">RoutingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | Represents the criteria used for routing requests. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description">Description</a></code> | <code>string</code> | Description of the Prompt Router. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]</code> | List of Tags. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FallbackModel`<sup>Required</sup> <a name="FallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.fallbackModel"></a>

```csharp
public BedrockIntelligentPromptRouterFallbackModel FallbackModel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

Model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#fallback_model BedrockIntelligentPromptRouter#fallback_model}

---

##### `Models`<sup>Required</sup> <a name="Models" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.models"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterModels[] Models { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

List of model configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#models BedrockIntelligentPromptRouter#models}

---

##### `PromptRouterName`<sup>Required</sup> <a name="PromptRouterName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.promptRouterName"></a>

```csharp
public string PromptRouterName { get; set; }
```

- *Type:* string

Name of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#prompt_router_name BedrockIntelligentPromptRouter#prompt_router_name}

---

##### `RoutingCriteria`<sup>Required</sup> <a name="RoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.routingCriteria"></a>

```csharp
public BedrockIntelligentPromptRouterRoutingCriteria RoutingCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

Represents the criteria used for routing requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#routing_criteria BedrockIntelligentPromptRouter#routing_criteria}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#description BedrockIntelligentPromptRouter#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterConfig.property.tags"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

List of Tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#tags BedrockIntelligentPromptRouter#tags}

---

### BedrockIntelligentPromptRouterFallbackModel <a name="BedrockIntelligentPromptRouterFallbackModel" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterFallbackModel {
    string ModelArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn">ModelArn</a></code> | <code>string</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel.property.modelArn"></a>

```csharp
public string ModelArn { get; set; }
```

- *Type:* string

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterModels <a name="BedrockIntelligentPromptRouterModels" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterModels {
    string ModelArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn">ModelArn</a></code> | <code>string</code> | Arn of underlying model which are added in the Prompt Router. |

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels.property.modelArn"></a>

```csharp
public string ModelArn { get; set; }
```

- *Type:* string

Arn of underlying model which are added in the Prompt Router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#model_arn BedrockIntelligentPromptRouter#model_arn}

---

### BedrockIntelligentPromptRouterRoutingCriteria <a name="BedrockIntelligentPromptRouterRoutingCriteria" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterRoutingCriteria {
    double ResponseQualityDifference
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference">ResponseQualityDifference</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}. |

---

##### `ResponseQualityDifference`<sup>Required</sup> <a name="ResponseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria.property.responseQualityDifference"></a>

```csharp
public double ResponseQualityDifference { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#response_quality_difference BedrockIntelligentPromptRouter#response_quality_difference}.

---

### BedrockIntelligentPromptRouterTags <a name="BedrockIntelligentPromptRouterTags" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key">Key</a></code> | <code>string</code> | Tag Key. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value">Value</a></code> | <code>string</code> | Tag Value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#key BedrockIntelligentPromptRouter#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag Value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_intelligent_prompt_router#value BedrockIntelligentPromptRouter#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockIntelligentPromptRouterFallbackModelOutputReference <a name="BedrockIntelligentPromptRouterFallbackModelOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterFallbackModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput">ModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArnInput"></a>

```csharp
public string ModelArnInput { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterFallbackModel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterFallbackModel">BedrockIntelligentPromptRouterFallbackModel</a>

---


### BedrockIntelligentPromptRouterModelsList <a name="BedrockIntelligentPromptRouterModelsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get"></a>

```csharp
private BedrockIntelligentPromptRouterModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterModels[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>[]

---


### BedrockIntelligentPromptRouterModelsOutputReference <a name="BedrockIntelligentPromptRouterModelsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput">ModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArnInput"></a>

```csharp
public string ModelArnInput { get; }
```

- *Type:* string

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModelsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterModels InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterModels">BedrockIntelligentPromptRouterModels</a>

---


### BedrockIntelligentPromptRouterRoutingCriteriaOutputReference <a name="BedrockIntelligentPromptRouterRoutingCriteriaOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterRoutingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput">ResponseQualityDifferenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference">ResponseQualityDifference</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponseQualityDifferenceInput`<sup>Optional</sup> <a name="ResponseQualityDifferenceInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifferenceInput"></a>

```csharp
public double ResponseQualityDifferenceInput { get; }
```

- *Type:* double

---

##### `ResponseQualityDifference`<sup>Required</sup> <a name="ResponseQualityDifference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.responseQualityDifference"></a>

```csharp
public double ResponseQualityDifference { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterRoutingCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterRoutingCriteria">BedrockIntelligentPromptRouterRoutingCriteria</a>

---


### BedrockIntelligentPromptRouterTagsList <a name="BedrockIntelligentPromptRouterTagsList" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get"></a>

```csharp
private BedrockIntelligentPromptRouterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>[]

---


### BedrockIntelligentPromptRouterTagsOutputReference <a name="BedrockIntelligentPromptRouterTagsOutputReference" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockIntelligentPromptRouterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockIntelligentPromptRouterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockIntelligentPromptRouter.BedrockIntelligentPromptRouterTags">BedrockIntelligentPromptRouterTags</a>

---



