# `inspectorv2CodeSecurityIntegration` Submodule <a name="`inspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CodeSecurityIntegration <a name="Inspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegration(Construct Scope, string Id, Inspectorv2CodeSecurityIntegrationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig">Inspectorv2CodeSecurityIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig">Inspectorv2CodeSecurityIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails">PutCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails">PutUpdateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails">ResetCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails">ResetUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCreateIntegrationDetails` <a name="PutCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails"></a>

```csharp
private void PutCreateIntegrationDetails(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putCreateIntegrationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---

##### `PutUpdateIntegrationDetails` <a name="PutUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails"></a>

```csharp
private void PutUpdateIntegrationDetails(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.putUpdateIntegrationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---

##### `ResetCreateIntegrationDetails` <a name="ResetCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetCreateIntegrationDetails"></a>

```csharp
private void ResetCreateIntegrationDetails()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUpdateIntegrationDetails` <a name="ResetUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.resetUpdateIntegrationDetails"></a>

```csharp
private void ResetUpdateIntegrationDetails()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CodeSecurityIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Inspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Inspectorv2CodeSecurityIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Inspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails">CreateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">UpdateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput">CreateIntegrationDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput">UpdateIntegrationDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreateIntegrationDetails`<sup>Required</sup> <a name="CreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference CreateIntegrationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `UpdateIntegrationDetails`<sup>Required</sup> <a name="UpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference UpdateIntegrationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `CreateIntegrationDetailsInput`<sup>Optional</sup> <a name="CreateIntegrationDetailsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.createIntegrationDetailsInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails CreateIntegrationDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UpdateIntegrationDetailsInput`<sup>Optional</sup> <a name="UpdateIntegrationDetailsInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.updateIntegrationDetailsInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails UpdateIntegrationDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CodeSecurityIntegrationConfig <a name="Inspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails CreateIntegrationDetails = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Type = null,
    Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails UpdateIntegrationDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails">CreateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | Create Integration Details. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name">Name</a></code> | <code>string</code> | Code Security Integration name. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type">Type</a></code> | <code>string</code> | Integration Type. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails">UpdateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | Update Integration Details. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateIntegrationDetails`<sup>Optional</sup> <a name="CreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.createIntegrationDetails"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails CreateIntegrationDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

Create Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#create_integration_details Inspectorv2CodeSecurityIntegration#create_integration_details}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Code Security Integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#name Inspectorv2CodeSecurityIntegration#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#tags Inspectorv2CodeSecurityIntegration#tags}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Integration Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#type Inspectorv2CodeSecurityIntegration#type}

---

##### `UpdateIntegrationDetails`<sup>Optional</sup> <a name="UpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationConfig.property.updateIntegrationDetails"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails UpdateIntegrationDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

Update Integration Details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#update_integration_details Inspectorv2CodeSecurityIntegration#update_integration_details}

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails {
    Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged GitlabSelfManaged = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `GitlabSelfManaged`<sup>Optional</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails.property.gitlabSelfManaged"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged GitlabSelfManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged {
    string AccessToken = null,
    string InstanceUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken">AccessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#access_token Inspectorv2CodeSecurityIntegration#access_token}.

---

##### `InstanceUrl`<sup>Optional</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#instance_url Inspectorv2CodeSecurityIntegration#instance_url}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails {
    Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub Github = null,
    Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged GitlabSelfManaged = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}. |

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.github"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub Github { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#github Inspectorv2CodeSecurityIntegration#github}.

---

##### `GitlabSelfManaged`<sup>Optional</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.property.gitlabSelfManaged"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged GitlabSelfManaged { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#gitlab_self_managed Inspectorv2CodeSecurityIntegration#gitlab_self_managed}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub {
    string Code = null,
    string InstallationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code">Code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId">InstallationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}. |

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#code Inspectorv2CodeSecurityIntegration#code}.

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.property.installationId"></a>

```csharp
public string InstallationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#installation_id Inspectorv2CodeSecurityIntegration#installation_id}.

---

### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged {
    string AuthCode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode">AuthCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}. |

---

##### `AuthCode`<sup>Optional</sup> <a name="AuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.property.authCode"></a>

```csharp
public string AuthCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/inspectorv2_code_security_integration#auth_code Inspectorv2CodeSecurityIntegration#auth_code}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl">ResetInstanceUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetInstanceUrl` <a name="ResetInstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resetInstanceUrl"></a>

```csharp
private void ResetInstanceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput">InstanceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `InstanceUrlInput`<sup>Optional</sup> <a name="InstanceUrlInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrlInput"></a>

```csharp
public string InstanceUrlInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```csharp
public string InstanceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---


### Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged">PutGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged">ResetGitlabSelfManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGitlabSelfManaged` <a name="PutGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```csharp
private void PutGitlabSelfManaged(Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---

##### `ResetGitlabSelfManaged` <a name="ResetGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```csharp
private void ResetGitlabSelfManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">GitlabSelfManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference GitlabSelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `GitlabSelfManagedInput`<sup>Optional</sup> <a name="GitlabSelfManagedInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged GitlabSelfManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails">Inspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId">ResetInstallationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resetInstallationId"></a>

```csharp
private void ResetInstallationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput">InstallationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">InstallationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationIdInput"></a>

```csharp
public string InstallationIdInput { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```csharp
public string InstallationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode">ResetAuthCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthCode` <a name="ResetAuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resetAuthCode"></a>

```csharp
private void ResetAuthCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput">AuthCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">AuthCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthCodeInput`<sup>Optional</sup> <a name="AuthCodeInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCodeInput"></a>

```csharp
public string AuthCodeInput { get; }
```

- *Type:* string

---

##### `AuthCode`<sup>Required</sup> <a name="AuthCode" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```csharp
public string AuthCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---


### Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged">PutGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged">ResetGitlabSelfManaged</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGithub` <a name="PutGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub"></a>

```csharp
private void PutGithub(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGithub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---

##### `PutGitlabSelfManaged` <a name="PutGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged"></a>

```csharp
private void PutGitlabSelfManaged(Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.putGitlabSelfManaged.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---

##### `ResetGithub` <a name="ResetGithub" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGitlabSelfManaged` <a name="ResetGitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resetGitlabSelfManaged"></a>

```csharp
private void ResetGitlabSelfManaged()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput">GithubInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput">GitlabSelfManagedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference Github { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```csharp
public Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference GitlabSelfManaged { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.githubInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub GithubInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---

##### `GitlabSelfManagedInput`<sup>Optional</sup> <a name="GitlabSelfManagedInput" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManagedInput"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged GitlabSelfManagedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CodeSecurityIntegration.Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">Inspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---



