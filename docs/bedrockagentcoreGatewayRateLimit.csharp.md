# `bedrockagentcoreGatewayRateLimit` Submodule <a name="`bedrockagentcoreGatewayRateLimit` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRateLimit <a name="BedrockagentcoreGatewayRateLimit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimit(Construct Scope, string Id, BedrockagentcoreGatewayRateLimitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig">BedrockagentcoreGatewayRateLimitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig">BedrockagentcoreGatewayRateLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier">ResetGatewayIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId">ResetRateLimitId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries"></a>

```csharp
private void PutEntries(IResolvable|BedrockagentcoreGatewayRateLimitEntries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGatewayIdentifier` <a name="ResetGatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier"></a>

```csharp
private void ResetGatewayIdentifier()
```

##### `ResetRateLimitId` <a name="ResetRateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId"></a>

```csharp
private void ResetRateLimitId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRateLimit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRateLimit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRateLimit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BedrockagentcoreGatewayRateLimit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreGatewayRateLimit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreGatewayRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput">DimensionKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput">EntriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput">GatewayIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput">RateLimitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys">DimensionKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier">GatewayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId">RateLimitId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries"></a>

```csharp
public BedrockagentcoreGatewayRateLimitEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DimensionKeysInput`<sup>Optional</sup> <a name="DimensionKeysInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput"></a>

```csharp
public string[] DimensionKeysInput { get; }
```

- *Type:* string[]

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntries[] EntriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

---

##### `GatewayIdentifierInput`<sup>Optional</sup> <a name="GatewayIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput"></a>

```csharp
public string GatewayIdentifierInput { get; }
```

- *Type:* string

---

##### `RateLimitIdInput`<sup>Optional</sup> <a name="RateLimitIdInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput"></a>

```csharp
public string RateLimitIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DimensionKeys`<sup>Required</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys"></a>

```csharp
public string[] DimensionKeys { get; }
```

- *Type:* string[]

---

##### `GatewayIdentifier`<sup>Required</sup> <a name="GatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier"></a>

```csharp
public string GatewayIdentifier { get; }
```

- *Type:* string

---

##### `RateLimitId`<sup>Required</sup> <a name="RateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId"></a>

```csharp
public string RateLimitId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRateLimitConfig <a name="BedrockagentcoreGatewayRateLimitConfig" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] DimensionKeys,
    IResolvable|BedrockagentcoreGatewayRateLimitEntries[] Entries,
    string Description = null,
    string GatewayIdentifier = null,
    string RateLimitId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys">DimensionKeys</a></code> | <code>string[]</code> | Ordered list of dimension names defining the scope of this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries">Entries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]</code> | Rule entries mapping dimension values to rate configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description">Description</a></code> | <code>string</code> | Optional human-readable description for this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier">GatewayIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId">RateLimitId</a></code> | <code>string</code> | Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DimensionKeys`<sup>Required</sup> <a name="DimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys"></a>

```csharp
public string[] DimensionKeys { get; set; }
```

- *Type:* string[]

Ordered list of dimension names defining the scope of this limit.

Unique per gateway — no two limits can share the same dimensionKeys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys BedrockagentcoreGatewayRateLimit#dimension_keys}

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntries[] Entries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

Rule entries mapping dimension values to rate configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries BedrockagentcoreGatewayRateLimit#entries}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional human-readable description for this limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#description BedrockagentcoreGatewayRateLimit#description}

---

##### `GatewayIdentifier`<sup>Optional</sup> <a name="GatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier"></a>

```csharp
public string GatewayIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}.

---

##### `RateLimitId`<sup>Optional</sup> <a name="RateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId"></a>

```csharp
public string RateLimitId { get; set; }
```

- *Type:* string

Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id BedrockagentcoreGatewayRateLimit#rate_limit_id}

---

### BedrockagentcoreGatewayRateLimitEntries <a name="BedrockagentcoreGatewayRateLimitEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntries {
    System.Collections.Generic.IDictionary<string, string> Dimensions,
    IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections[] Connections = null,
    IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests[] Requests = null,
    IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens[] Tokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of dimension name to dimension value for a rule entry. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections">Connections</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]</code> | Connection rate limits (per second only). Limited to 1 entry for now. — P2. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests">Requests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]</code> | Request rate limits (RPS or RPM). Limited to 1 entry for now. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens">Tokens</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]</code> | Token rate limits (TPM). Limited to 1 entry for now. — P1. |

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of dimension name to dimension value for a rule entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimensions BedrockagentcoreGatewayRateLimit#dimensions}

---

##### `Connections`<sup>Optional</sup> <a name="Connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections[] Connections { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

Connection rate limits (per second only). Limited to 1 entry for now. — P2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#connections BedrockagentcoreGatewayRateLimit#connections}

---

##### `Requests`<sup>Optional</sup> <a name="Requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests[] Requests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

Request rate limits (RPS or RPM). Limited to 1 entry for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#requests BedrockagentcoreGatewayRateLimit#requests}

---

##### `Tokens`<sup>Optional</sup> <a name="Tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens[] Tokens { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

Token rate limits (TPM). Limited to 1 entry for now. — P1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#tokens BedrockagentcoreGatewayRateLimit#tokens}

---

### BedrockagentcoreGatewayRateLimitEntriesConnections <a name="BedrockagentcoreGatewayRateLimitEntriesConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesConnections {
    string Period = null,
    double Rate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period">Period</a></code> | <code>string</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate">Rate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `Rate`<sup>Optional</sup> <a name="Rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate"></a>

```csharp
public double Rate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesRequests <a name="BedrockagentcoreGatewayRateLimitEntriesRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesRequests {
    string Period = null,
    double Rate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period">Period</a></code> | <code>string</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate">Rate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `Rate`<sup>Optional</sup> <a name="Rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate"></a>

```csharp
public double Rate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesTokens <a name="BedrockagentcoreGatewayRateLimitEntriesTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesTokens {
    string Period = null,
    double Rate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period">Period</a></code> | <code>string</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate">Rate</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `Rate`<sup>Optional</sup> <a name="Rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate"></a>

```csharp
public double Rate { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRateLimitEntriesConnectionsList <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get"></a>

```csharp
private BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate">ResetRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetRate` <a name="ResetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate"></a>

```csharp
private void ResetRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput">RateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate">Rate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput"></a>

```csharp
public double RateInput { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate"></a>

```csharp
public double Rate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>

---


### BedrockagentcoreGatewayRateLimitEntriesList <a name="BedrockagentcoreGatewayRateLimitEntriesList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get"></a>

```csharp
private BedrockagentcoreGatewayRateLimitEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections">PutConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests">PutRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens">PutTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections">ResetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests">ResetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens">ResetTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnections` <a name="PutConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections"></a>

```csharp
private void PutConnections(IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

---

##### `PutRequests` <a name="PutRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests"></a>

```csharp
private void PutRequests(IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

---

##### `PutTokens` <a name="PutTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens"></a>

```csharp
private void PutTokens(IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

---

##### `ResetConnections` <a name="ResetConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections"></a>

```csharp
private void ResetConnections()
```

##### `ResetRequests` <a name="ResetRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests"></a>

```csharp
private void ResetRequests()
```

##### `ResetTokens` <a name="ResetTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens"></a>

```csharp
private void ResetTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests">Requests</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens">Tokens</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput">ConnectionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput">RequestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput">TokensInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions">Dimensions</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections"></a>

```csharp
public BedrockagentcoreGatewayRateLimitEntriesConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a>

---

##### `Requests`<sup>Required</sup> <a name="Requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests"></a>

```csharp
public BedrockagentcoreGatewayRateLimitEntriesRequestsList Requests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a>

---

##### `Tokens`<sup>Required</sup> <a name="Tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens"></a>

```csharp
public BedrockagentcoreGatewayRateLimitEntriesTokensList Tokens { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a>

---

##### `ConnectionsInput`<sup>Optional</sup> <a name="ConnectionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesConnections[] ConnectionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DimensionsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestsInput`<sup>Optional</sup> <a name="RequestsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests[] RequestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

---

##### `TokensInput`<sup>Optional</sup> <a name="TokensInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens[] TokensInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Dimensions { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsList <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesRequestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get"></a>

```csharp
private BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate">ResetRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetRate` <a name="ResetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate"></a>

```csharp
private void ResetRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput">RateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate">Rate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput"></a>

```csharp
public double RateInput { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate"></a>

```csharp
public double Rate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesRequests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>

---


### BedrockagentcoreGatewayRateLimitEntriesTokensList <a name="BedrockagentcoreGatewayRateLimitEntriesTokensList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesTokensList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get"></a>

```csharp
private BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate">ResetRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```

##### `ResetRate` <a name="ResetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate"></a>

```csharp
private void ResetRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput">RateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate">Rate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput"></a>

```csharp
public double RateInput { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate"></a>

```csharp
public double Rate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreGatewayRateLimitEntriesTokens InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>

---



