# `customerprofilesCalculatedAttributeDefinition` Submodule <a name="`customerprofilesCalculatedAttributeDefinition` Submodule" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesCalculatedAttributeDefinition <a name="CustomerprofilesCalculatedAttributeDefinition" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinition(Construct Scope, string Id, CustomerprofilesCalculatedAttributeDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig">CustomerprofilesCalculatedAttributeDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig">CustomerprofilesCalculatedAttributeDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails">PutAttributeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData">ResetUseHistoricalData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAttributeDetails` <a name="PutAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails"></a>

```csharp
private void PutAttributeDetails(CustomerprofilesCalculatedAttributeDefinitionAttributeDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions"></a>

```csharp
private void PutConditions(CustomerprofilesCalculatedAttributeDefinitionConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUseHistoricalData` <a name="ResetUseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData"></a>

```csharp
private void ResetUseHistoricalData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesCalculatedAttributeDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesCalculatedAttributeDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesCalculatedAttributeDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesCalculatedAttributeDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesCalculatedAttributeDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesCalculatedAttributeDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesCalculatedAttributeDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails">AttributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness">Readiness</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput">AttributeDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput">CalculatedAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput">StatisticInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput">UseHistoricalDataInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName">CalculatedAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic">Statistic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData">UseHistoricalData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttributeDetails`<sup>Required</sup> <a name="AttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference AttributeDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Readiness`<sup>Required</sup> <a name="Readiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference Readiness { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a>

---

##### `AttributeDetailsInput`<sup>Optional</sup> <a name="AttributeDetailsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetails AttributeDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---

##### `CalculatedAttributeNameInput`<sup>Optional</sup> <a name="CalculatedAttributeNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput"></a>

```csharp
public string CalculatedAttributeNameInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditions ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput"></a>

```csharp
public string StatisticInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]

---

##### `UseHistoricalDataInput`<sup>Optional</sup> <a name="UseHistoricalDataInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput"></a>

```csharp
public bool|IResolvable UseHistoricalDataInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CalculatedAttributeName`<sup>Required</sup> <a name="CalculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName"></a>

```csharp
public string CalculatedAttributeName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic"></a>

```csharp
public string Statistic { get; }
```

- *Type:* string

---

##### `UseHistoricalData`<sup>Required</sup> <a name="UseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData"></a>

```csharp
public bool|IResolvable UseHistoricalData { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetails <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetails {
    IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes[] Attributes,
    string Expression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes">Attributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]</code> | A list of attribute items specified in the mathematical expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression">Expression</a></code> | <code>string</code> | Mathematical expression that is performed on attribute items provided in the attribute list. |

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes[] Attributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]

A list of attribute items specified in the mathematical expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CustomerprofilesCalculatedAttributeDefinition#attributes}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Mathematical expression that is performed on attribute items provided in the attribute list.

Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#expression CustomerprofilesCalculatedAttributeDefinition#expression}

---

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name">Name</a></code> | <code>string</code> | The name of an attribute defined in a profile object type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of an attribute defined in a profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#name CustomerprofilesCalculatedAttributeDefinition#name}

---

### CustomerprofilesCalculatedAttributeDefinitionConditions <a name="CustomerprofilesCalculatedAttributeDefinitionConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditions {
    double ObjectCount = null,
    CustomerprofilesCalculatedAttributeDefinitionConditionsRange Range = null,
    CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount">ObjectCount</a></code> | <code>double</code> | The number of profile objects used for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range">Range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | The relative time period over which data is included in the aggregation. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | The threshold for the calculated attribute. |

---

##### `ObjectCount`<sup>Optional</sup> <a name="ObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount"></a>

```csharp
public double ObjectCount { get; set; }
```

- *Type:* double

The number of profile objects used for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#object_count CustomerprofilesCalculatedAttributeDefinition#object_count}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsRange Range { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

The relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#range CustomerprofilesCalculatedAttributeDefinition#range}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold Threshold { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

The threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#threshold CustomerprofilesCalculatedAttributeDefinition#threshold}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsRange {
    string TimestampFormat = null,
    string TimestampSource = null,
    string Unit = null,
    double Value = null,
    CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange ValueRange = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | The format the timestamp field in your JSON object is specified. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource">TimestampSource</a></code> | <code>string</code> | An expression specifying the field in your JSON object from which the date should be parsed. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit">Unit</a></code> | <code>string</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value">Value</a></code> | <code>double</code> | The amount of time of the specified unit. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | A structure specifying the endpoints of the relative time period over which data is included in the aggregation. |

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

The format the timestamp field in your JSON object is specified.

This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_format CustomerprofilesCalculatedAttributeDefinition#timestamp_format}

---

##### `TimestampSource`<sup>Optional</sup> <a name="TimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource"></a>

```csharp
public string TimestampSource { get; set; }
```

- *Type:* string

An expression specifying the field in your JSON object from which the date should be parsed.

The expression should follow the structure of "{ObjectTypeName.<Location of timestamp field in JSON pointer format>}". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_source CustomerprofilesCalculatedAttributeDefinition#timestamp_source}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#unit CustomerprofilesCalculatedAttributeDefinition#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

##### `ValueRange`<sup>Optional</sup> <a name="ValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange ValueRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

A structure specifying the endpoints of the relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#value_range CustomerprofilesCalculatedAttributeDefinition#value_range}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange {
    double End = null,
    double Start = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end">End</a></code> | <code>double</code> | The ending point for this range. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start">Start</a></code> | <code>double</code> | The starting point for this range. |

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end"></a>

```csharp
public double End { get; set; }
```

- *Type:* double

The ending point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#end CustomerprofilesCalculatedAttributeDefinition#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start"></a>

```csharp
public double Start { get; set; }
```

- *Type:* double

The starting point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#start CustomerprofilesCalculatedAttributeDefinition#start}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold {
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator">Operator</a></code> | <code>string</code> | The operator of the threshold. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value">Value</a></code> | <code>string</code> | The value of the threshold. |

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The operator of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#operator CustomerprofilesCalculatedAttributeDefinition#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

### CustomerprofilesCalculatedAttributeDefinitionConfig <a name="CustomerprofilesCalculatedAttributeDefinitionConfig" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CustomerprofilesCalculatedAttributeDefinitionAttributeDetails AttributeDetails,
    string CalculatedAttributeName,
    string DomainName,
    string Statistic,
    CustomerprofilesCalculatedAttributeDefinitionConditions Conditions = null,
    string Description = null,
    string DisplayName = null,
    IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags[] Tags = null,
    bool|IResolvable UseHistoricalData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails">AttributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | Mathematical expression and a list of attribute items specified in that expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName">CalculatedAttributeName</a></code> | <code>string</code> | The unique name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName">DomainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic">Statistic</a></code> | <code>string</code> | The aggregation operation to perform for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | The conditions including range, object count, and threshold for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description">Description</a></code> | <code>string</code> | The description of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData">UseHistoricalData</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to use historical data for the calculated attribute. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttributeDetails`<sup>Required</sup> <a name="AttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetails AttributeDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

Mathematical expression and a list of attribute items specified in that expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CustomerprofilesCalculatedAttributeDefinition#attribute_details}

---

##### `CalculatedAttributeName`<sup>Required</sup> <a name="CalculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName"></a>

```csharp
public string CalculatedAttributeName { get; set; }
```

- *Type:* string

The unique name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CustomerprofilesCalculatedAttributeDefinition#calculated_attribute_name}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CustomerprofilesCalculatedAttributeDefinition#domain_name}

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic"></a>

```csharp
public string Statistic { get; set; }
```

- *Type:* string

The aggregation operation to perform for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CustomerprofilesCalculatedAttributeDefinition#statistic}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

The conditions including range, object count, and threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CustomerprofilesCalculatedAttributeDefinition#conditions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#description CustomerprofilesCalculatedAttributeDefinition#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CustomerprofilesCalculatedAttributeDefinition#display_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CustomerprofilesCalculatedAttributeDefinition#tags}

---

##### `UseHistoricalData`<sup>Optional</sup> <a name="UseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData"></a>

```csharp
public bool|IResolvable UseHistoricalData { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to use historical data for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CustomerprofilesCalculatedAttributeDefinition#use_historical_data}

---

### CustomerprofilesCalculatedAttributeDefinitionReadiness <a name="CustomerprofilesCalculatedAttributeDefinitionReadiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionReadiness {

};
```


### CustomerprofilesCalculatedAttributeDefinitionTags <a name="CustomerprofilesCalculatedAttributeDefinitionTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#key CustomerprofilesCalculatedAttributeDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get"></a>

```csharp
private CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes[] AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>[]

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount">ResetObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange"></a>

```csharp
private void PutRange(CustomerprofilesCalculatedAttributeDefinitionConditionsRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold"></a>

```csharp
private void PutThreshold(CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---

##### `ResetObjectCount` <a name="ResetObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount"></a>

```csharp
private void ResetObjectCount()
```

##### `ResetRange` <a name="ResetRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range">Range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput">ObjectCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput">RangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount">ObjectCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference Threshold { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a>

---

##### `ObjectCountInput`<sup>Optional</sup> <a name="ObjectCountInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput"></a>

```csharp
public double ObjectCountInput { get; }
```

- *Type:* double

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRange RangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold ThresholdInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount"></a>

```csharp
public double ObjectCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange">PutValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource">ResetTimestampSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange">ResetValueRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValueRange` <a name="PutValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange"></a>

```csharp
private void PutValueRange(CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetTimestampSource` <a name="ResetTimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource"></a>

```csharp
private void ResetTimestampSource()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValueRange` <a name="ResetValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange"></a>

```csharp
private void ResetValueRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange">ValueRange</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput">TimestampSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput">ValueRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource">TimestampSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueRange`<sup>Required</sup> <a name="ValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference ValueRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a>

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TimestampSourceInput`<sup>Optional</sup> <a name="TimestampSourceInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput"></a>

```csharp
public string TimestampSourceInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `ValueRangeInput`<sup>Optional</sup> <a name="ValueRangeInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange ValueRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `TimestampSource`<sup>Required</sup> <a name="TimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource"></a>

```csharp
public string TimestampSource { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart"></a>

```csharp
private void ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput">EndInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput">StartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end">End</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start">Start</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput"></a>

```csharp
public double EndInput { get; }
```

- *Type:* double

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput"></a>

```csharp
public double StartInput { get; }
```

- *Type:* double

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end"></a>

```csharp
public double End { get; }
```

- *Type:* double

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start"></a>

```csharp
public double Start { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---


### CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage">ProgressPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ProgressPercentage`<sup>Required</sup> <a name="ProgressPercentage" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage"></a>

```csharp
public double ProgressPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue"></a>

```csharp
public CustomerprofilesCalculatedAttributeDefinitionReadiness InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a>

---


### CustomerprofilesCalculatedAttributeDefinitionTagsList <a name="CustomerprofilesCalculatedAttributeDefinitionTagsList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get"></a>

```csharp
private CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>[]

---


### CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>

---



