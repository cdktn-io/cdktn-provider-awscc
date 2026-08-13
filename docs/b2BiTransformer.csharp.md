# `b2BiTransformer` Submodule <a name="`b2BiTransformer` Submodule" id="@cdktn/provider-awscc.b2BiTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiTransformer <a name="B2BiTransformer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer awscc_b2bi_transformer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformer(Construct Scope, string Id, B2BiTransformerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig">B2BiTransformerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig">B2BiTransformerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType">PutEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion">PutInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping">PutMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion">PutOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments">PutSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType">ResetEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion">ResetInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping">ResetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate">ResetMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion">ResetOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument">ResetSampleDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments">ResetSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEdiType` <a name="PutEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType"></a>

```csharp
private void PutEdiType(B2BiTransformerEdiType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---

##### `PutInputConversion` <a name="PutInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion"></a>

```csharp
private void PutInputConversion(B2BiTransformerInputConversion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---

##### `PutMapping` <a name="PutMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping"></a>

```csharp
private void PutMapping(B2BiTransformerMapping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---

##### `PutOutputConversion` <a name="PutOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion"></a>

```csharp
private void PutOutputConversion(B2BiTransformerOutputConversion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---

##### `PutSampleDocuments` <a name="PutSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments"></a>

```csharp
private void PutSampleDocuments(B2BiTransformerSampleDocuments Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags"></a>

```csharp
private void PutTags(IResolvable|B2BiTransformerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

---

##### `ResetEdiType` <a name="ResetEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType"></a>

```csharp
private void ResetEdiType()
```

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat"></a>

```csharp
private void ResetFileFormat()
```

##### `ResetInputConversion` <a name="ResetInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion"></a>

```csharp
private void ResetInputConversion()
```

##### `ResetMapping` <a name="ResetMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping"></a>

```csharp
private void ResetMapping()
```

##### `ResetMappingTemplate` <a name="ResetMappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate"></a>

```csharp
private void ResetMappingTemplate()
```

##### `ResetOutputConversion` <a name="ResetOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion"></a>

```csharp
private void ResetOutputConversion()
```

##### `ResetSampleDocument` <a name="ResetSampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument"></a>

```csharp
private void ResetSampleDocument()
```

##### `ResetSampleDocuments` <a name="ResetSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments"></a>

```csharp
private void ResetSampleDocuments()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

B2BiTransformer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

B2BiTransformer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

B2BiTransformer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

B2BiTransformer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the B2BiTransformer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing B2BiTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the B2BiTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType">EdiType</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion">InputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping">Mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion">OutputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments">SampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn">TransformerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId">TransformerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput">EdiTypeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput">FileFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput">InputConversionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput">MappingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput">MappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput">OutputConversionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput">SampleDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput">SampleDocumentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat">FileFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate">MappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument">SampleDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EdiType`<sup>Required</sup> <a name="EdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType"></a>

```csharp
public B2BiTransformerEdiTypeOutputReference EdiType { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputConversion`<sup>Required</sup> <a name="InputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion"></a>

```csharp
public B2BiTransformerInputConversionOutputReference InputConversion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a>

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping"></a>

```csharp
public B2BiTransformerMappingOutputReference Mapping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `OutputConversion`<sup>Required</sup> <a name="OutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion"></a>

```csharp
public B2BiTransformerOutputConversionOutputReference OutputConversion { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a>

---

##### `SampleDocuments`<sup>Required</sup> <a name="SampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments"></a>

```csharp
public B2BiTransformerSampleDocumentsOutputReference SampleDocuments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags"></a>

```csharp
public B2BiTransformerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a>

---

##### `TransformerArn`<sup>Required</sup> <a name="TransformerArn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn"></a>

```csharp
public string TransformerArn { get; }
```

- *Type:* string

---

##### `TransformerId`<sup>Required</sup> <a name="TransformerId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId"></a>

```csharp
public string TransformerId { get; }
```

- *Type:* string

---

##### `EdiTypeInput`<sup>Optional</sup> <a name="EdiTypeInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput"></a>

```csharp
public IResolvable|B2BiTransformerEdiType EdiTypeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput"></a>

```csharp
public string FileFormatInput { get; }
```

- *Type:* string

---

##### `InputConversionInput`<sup>Optional</sup> <a name="InputConversionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversion InputConversionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput"></a>

```csharp
public IResolvable|B2BiTransformerMapping MappingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---

##### `MappingTemplateInput`<sup>Optional</sup> <a name="MappingTemplateInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput"></a>

```csharp
public string MappingTemplateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputConversionInput`<sup>Optional</sup> <a name="OutputConversionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversion OutputConversionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---

##### `SampleDocumentInput`<sup>Optional</sup> <a name="SampleDocumentInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput"></a>

```csharp
public string SampleDocumentInput { get; }
```

- *Type:* string

---

##### `SampleDocumentsInput`<sup>Optional</sup> <a name="SampleDocumentsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput"></a>

```csharp
public IResolvable|B2BiTransformerSampleDocuments SampleDocumentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput"></a>

```csharp
public IResolvable|B2BiTransformerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat"></a>

```csharp
public string FileFormat { get; }
```

- *Type:* string

---

##### `MappingTemplate`<sup>Required</sup> <a name="MappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate"></a>

```csharp
public string MappingTemplate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SampleDocument`<sup>Required</sup> <a name="SampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument"></a>

```csharp
public string SampleDocument { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiTransformerConfig <a name="B2BiTransformerConfig" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Status,
    B2BiTransformerEdiType EdiType = null,
    string FileFormat = null,
    B2BiTransformerInputConversion InputConversion = null,
    B2BiTransformerMapping Mapping = null,
    string MappingTemplate = null,
    B2BiTransformerOutputConversion OutputConversion = null,
    string SampleDocument = null,
    B2BiTransformerSampleDocuments SampleDocuments = null,
    IResolvable|B2BiTransformerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType">EdiType</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat">FileFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion">InputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping">Mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate">MappingTemplate</a></code> | <code>string</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion">OutputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument">SampleDocument</a></code> | <code>string</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments">SampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}.

---

##### `EdiType`<sup>Optional</sup> <a name="EdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType"></a>

```csharp
public B2BiTransformerEdiType EdiType { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}.

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat"></a>

```csharp
public string FileFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}.

---

##### `InputConversion`<sup>Optional</sup> <a name="InputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion"></a>

```csharp
public B2BiTransformerInputConversion InputConversion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}.

---

##### `Mapping`<sup>Optional</sup> <a name="Mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping"></a>

```csharp
public B2BiTransformerMapping Mapping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}.

---

##### `MappingTemplate`<sup>Optional</sup> <a name="MappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate"></a>

```csharp
public string MappingTemplate { get; set; }
```

- *Type:* string

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#mapping_template B2BiTransformer#mapping_template}

---

##### `OutputConversion`<sup>Optional</sup> <a name="OutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion"></a>

```csharp
public B2BiTransformerOutputConversion OutputConversion { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}.

---

##### `SampleDocument`<sup>Optional</sup> <a name="SampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument"></a>

```csharp
public string SampleDocument { get; set; }
```

- *Type:* string

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#sample_document B2BiTransformer#sample_document}

---

##### `SampleDocuments`<sup>Optional</sup> <a name="SampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments"></a>

```csharp
public B2BiTransformerSampleDocuments SampleDocuments { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags"></a>

```csharp
public IResolvable|B2BiTransformerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}.

---

### B2BiTransformerEdiType <a name="B2BiTransformerEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerEdiType {
    B2BiTransformerEdiTypeX12Details X12Details = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details">X12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}. |

---

##### `X12Details`<sup>Optional</sup> <a name="X12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details"></a>

```csharp
public B2BiTransformerEdiTypeX12Details X12Details { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}.

---

### B2BiTransformerEdiTypeX12Details <a name="B2BiTransformerEdiTypeX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerEdiTypeX12Details {
    string TransactionSet = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet">TransactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `TransactionSet`<sup>Optional</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet"></a>

```csharp
public string TransactionSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerInputConversion <a name="B2BiTransformerInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversion {
    B2BiTransformerInputConversionAdvancedOptions AdvancedOptions = null,
    B2BiTransformerInputConversionFormatOptions FormatOptions = null,
    string FromFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat">FromFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}. |

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptions AdvancedOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions"></a>

```csharp
public B2BiTransformerInputConversionFormatOptions FormatOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `FromFormat`<sup>Optional</sup> <a name="FromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat"></a>

```csharp
public string FromFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}.

---

### B2BiTransformerInputConversionAdvancedOptions <a name="B2BiTransformerInputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptions {
    B2BiTransformerInputConversionAdvancedOptionsX12 X12 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12 X12 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12 <a name="B2BiTransformerInputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12 {
    B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions SplitOptions = null,
    B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions ValidationOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `SplitOptions`<sup>Optional</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions SplitOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `ValidationOptions`<sup>Optional</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions ValidationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions {
    string SplitBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy">SplitBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `SplitBy`<sup>Optional</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```csharp
public string SplitBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions {
    IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] ValidationRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">ValidationRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `ValidationRules`<sup>Optional</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] ValidationRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
    B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule CodeListValidationRule = null,
    B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule ElementLengthValidationRule = null,
    B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule ElementRequirementValidationRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `CodeListValidationRule`<sup>Optional</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule CodeListValidationRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `ElementLengthValidationRule`<sup>Optional</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule ElementLengthValidationRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `ElementRequirementValidationRule`<sup>Optional</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule ElementRequirementValidationRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
    string[] CodesToAdd = null,
    string[] CodesToRemove = null,
    string ElementId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">CodesToAdd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">CodesToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `CodesToAdd`<sup>Optional</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```csharp
public string[] CodesToAdd { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `CodesToRemove`<sup>Optional</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```csharp
public string[] CodesToRemove { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
    string ElementId = null,
    double MaxLength = null,
    double MinLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">MaxLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">MinLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
    string ElementPosition = null,
    string Requirement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">ElementPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">Requirement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `ElementPosition`<sup>Optional</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```csharp
public string ElementPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```csharp
public string Requirement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerInputConversionFormatOptions <a name="B2BiTransformerInputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionFormatOptions {
    B2BiTransformerInputConversionFormatOptionsX12 X12 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12"></a>

```csharp
public B2BiTransformerInputConversionFormatOptionsX12 X12 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionFormatOptionsX12 <a name="B2BiTransformerInputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionFormatOptionsX12 {
    string TransactionSet = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet">TransactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `TransactionSet`<sup>Optional</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet"></a>

```csharp
public string TransactionSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerMapping <a name="B2BiTransformerMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerMapping {
    string Template = null,
    string TemplateLanguage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template">Template</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage">TemplateLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}. |

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template"></a>

```csharp
public string Template { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}.

---

##### `TemplateLanguage`<sup>Optional</sup> <a name="TemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage"></a>

```csharp
public string TemplateLanguage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}.

---

### B2BiTransformerOutputConversion <a name="B2BiTransformerOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversion {
    B2BiTransformerOutputConversionAdvancedOptions AdvancedOptions = null,
    B2BiTransformerOutputConversionFormatOptions FormatOptions = null,
    string ToFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat">ToFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}. |

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptions AdvancedOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions"></a>

```csharp
public B2BiTransformerOutputConversionFormatOptions FormatOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `ToFormat`<sup>Optional</sup> <a name="ToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat"></a>

```csharp
public string ToFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}.

---

### B2BiTransformerOutputConversionAdvancedOptions <a name="B2BiTransformerOutputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptions {
    B2BiTransformerOutputConversionAdvancedOptionsX12 X12 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12 X12 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12 <a name="B2BiTransformerOutputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12 {
    B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions SplitOptions = null,
    B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions ValidationOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `SplitOptions`<sup>Optional</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions SplitOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `ValidationOptions`<sup>Optional</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions ValidationOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions {
    string SplitBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy">SplitBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `SplitBy`<sup>Optional</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```csharp
public string SplitBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions {
    IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] ValidationRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">ValidationRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `ValidationRules`<sup>Optional</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] ValidationRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
    B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule CodeListValidationRule = null,
    B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule ElementLengthValidationRule = null,
    B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule ElementRequirementValidationRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `CodeListValidationRule`<sup>Optional</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule CodeListValidationRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `ElementLengthValidationRule`<sup>Optional</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule ElementLengthValidationRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `ElementRequirementValidationRule`<sup>Optional</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule ElementRequirementValidationRule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
    string[] CodesToAdd = null,
    string[] CodesToRemove = null,
    string ElementId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">CodesToAdd</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">CodesToRemove</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `CodesToAdd`<sup>Optional</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```csharp
public string[] CodesToAdd { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `CodesToRemove`<sup>Optional</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```csharp
public string[] CodesToRemove { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
    string ElementId = null,
    double MaxLength = null,
    double MinLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">ElementId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">MaxLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">MinLength</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```csharp
public string ElementId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
    string ElementPosition = null,
    string Requirement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">ElementPosition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">Requirement</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `ElementPosition`<sup>Optional</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```csharp
public string ElementPosition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```csharp
public string Requirement { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerOutputConversionFormatOptions <a name="B2BiTransformerOutputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionFormatOptions {
    B2BiTransformerOutputConversionFormatOptionsX12 X12 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12"></a>

```csharp
public B2BiTransformerOutputConversionFormatOptionsX12 X12 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionFormatOptionsX12 <a name="B2BiTransformerOutputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionFormatOptionsX12 {
    string TransactionSet = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet">TransactionSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `TransactionSet`<sup>Optional</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet"></a>

```csharp
public string TransactionSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerSampleDocuments <a name="B2BiTransformerSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerSampleDocuments {
    string BucketName = null,
    IResolvable|B2BiTransformerSampleDocumentsKeys[] Keys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys">Keys</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}.

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys"></a>

```csharp
public IResolvable|B2BiTransformerSampleDocumentsKeys[] Keys { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}.

---

### B2BiTransformerSampleDocumentsKeys <a name="B2BiTransformerSampleDocumentsKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerSampleDocumentsKeys {
    string Input = null,
    string Output = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input">Input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output">Output</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input"></a>

```csharp
public string Input { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output"></a>

```csharp
public string Output { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}.

---

### B2BiTransformerTags <a name="B2BiTransformerTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiTransformerEdiTypeOutputReference <a name="B2BiTransformerEdiTypeOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerEdiTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details">PutX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details">ResetX12Details</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12Details` <a name="PutX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details"></a>

```csharp
private void PutX12Details(B2BiTransformerEdiTypeX12Details Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---

##### `ResetX12Details` <a name="ResetX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details"></a>

```csharp
private void ResetX12Details()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details">X12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput">X12DetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12Details`<sup>Required</sup> <a name="X12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details"></a>

```csharp
public B2BiTransformerEdiTypeX12DetailsOutputReference X12Details { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a>

---

##### `X12DetailsInput`<sup>Optional</sup> <a name="X12DetailsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput"></a>

```csharp
public IResolvable|B2BiTransformerEdiTypeX12Details X12DetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerEdiType InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---


### B2BiTransformerEdiTypeX12DetailsOutputReference <a name="B2BiTransformerEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerEdiTypeX12DetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet">ResetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransactionSet` <a name="ResetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet"></a>

```csharp
private void ResetTransactionSet()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput">TransactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet">TransactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransactionSetInput`<sup>Optional</sup> <a name="TransactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput"></a>

```csharp
public string TransactionSetInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```csharp
public string TransactionSet { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerEdiTypeX12Details InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---


### B2BiTransformerInputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12"></a>

```csharp
private void PutX12(B2BiTransformerInputConversionAdvancedOptionsX12 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12"></a>

```csharp
private void ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12OutputReference X12 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12 X12Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions">PutSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions">PutValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">ResetSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">ResetValidationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSplitOptions` <a name="PutSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```csharp
private void PutSplitOptions(B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `PutValidationOptions` <a name="PutValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```csharp
private void PutValidationOptions(B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `ResetSplitOptions` <a name="ResetSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```csharp
private void ResetSplitOptions()
```

##### `ResetValidationOptions` <a name="ResetValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```csharp
private void ResetValidationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">SplitOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">ValidationOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SplitOptions`<sup>Required</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference SplitOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `ValidationOptions`<sup>Required</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference ValidationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `SplitOptionsInput`<sup>Optional</sup> <a name="SplitOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions SplitOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `ValidationOptionsInput`<sup>Optional</sup> <a name="ValidationOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions ValidationOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">ResetSplitBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSplitBy` <a name="ResetSplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```csharp
private void ResetSplitBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">SplitByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">SplitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SplitByInput`<sup>Optional</sup> <a name="SplitByInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```csharp
public string SplitByInput { get; }
```

- *Type:* string

---

##### `SplitBy`<sup>Required</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```csharp
public string SplitBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">PutValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">ResetValidationRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValidationRules` <a name="PutValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```csharp
private void PutValidationRules(IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `ResetValidationRules` <a name="ResetValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```csharp
private void ResetValidationRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">ValidationRules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">ValidationRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValidationRules`<sup>Required</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList ValidationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `ValidationRulesInput`<sup>Optional</sup> <a name="ValidationRulesInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] ValidationRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">ResetCodesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">ResetCodesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodesToAdd` <a name="ResetCodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```csharp
private void ResetCodesToAdd()
```

##### `ResetCodesToRemove` <a name="ResetCodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```csharp
private void ResetCodesToRemove()
```

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```csharp
private void ResetElementId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">CodesToAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">CodesToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">CodesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">CodesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodesToAddInput`<sup>Optional</sup> <a name="CodesToAddInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```csharp
public string[] CodesToAddInput { get; }
```

- *Type:* string[]

---

##### `CodesToRemoveInput`<sup>Optional</sup> <a name="CodesToRemoveInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```csharp
public string[] CodesToRemoveInput { get; }
```

- *Type:* string[]

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `CodesToAdd`<sup>Required</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```csharp
public string[] CodesToAdd { get; }
```

- *Type:* string[]

---

##### `CodesToRemove`<sup>Required</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```csharp
public string[] CodesToRemove { get; }
```

- *Type:* string[]

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```csharp
private void ResetElementId()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```csharp
private void ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">ResetElementPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementPosition` <a name="ResetElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```csharp
private void ResetElementPosition()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```csharp
private void ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">ElementPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">RequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">ElementPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">Requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementPositionInput`<sup>Optional</sup> <a name="ElementPositionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```csharp
public string ElementPositionInput { get; }
```

- *Type:* string

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```csharp
public string RequirementInput { get; }
```

- *Type:* string

---

##### `ElementPosition`<sup>Required</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```csharp
public string ElementPosition { get; }
```

- *Type:* string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```csharp
public string Requirement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```csharp
private B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">PutCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">PutElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">PutElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">ResetCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">ResetElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">ResetElementRequirementValidationRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeListValidationRule` <a name="PutCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```csharp
private void PutCodeListValidationRule(B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `PutElementLengthValidationRule` <a name="PutElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```csharp
private void PutElementLengthValidationRule(B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `PutElementRequirementValidationRule` <a name="PutElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```csharp
private void PutElementRequirementValidationRule(B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `ResetCodeListValidationRule` <a name="ResetCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```csharp
private void ResetCodeListValidationRule()
```

##### `ResetElementLengthValidationRule` <a name="ResetElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```csharp
private void ResetElementLengthValidationRule()
```

##### `ResetElementRequirementValidationRule` <a name="ResetElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```csharp
private void ResetElementRequirementValidationRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">CodeListValidationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">ElementLengthValidationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">ElementRequirementValidationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeListValidationRule`<sup>Required</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference CodeListValidationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `ElementLengthValidationRule`<sup>Required</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference ElementLengthValidationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `ElementRequirementValidationRule`<sup>Required</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference ElementRequirementValidationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `CodeListValidationRuleInput`<sup>Optional</sup> <a name="CodeListValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule CodeListValidationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `ElementLengthValidationRuleInput`<sup>Optional</sup> <a name="ElementLengthValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule ElementLengthValidationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `ElementRequirementValidationRuleInput`<sup>Optional</sup> <a name="ElementRequirementValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule ElementRequirementValidationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### B2BiTransformerInputConversionFormatOptionsOutputReference <a name="B2BiTransformerInputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionFormatOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12"></a>

```csharp
private void PutX12(B2BiTransformerInputConversionFormatOptionsX12 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12"></a>

```csharp
private void ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12"></a>

```csharp
public B2BiTransformerInputConversionFormatOptionsX12OutputReference X12 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionFormatOptionsX12 X12Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionFormatOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---


### B2BiTransformerInputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerInputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionFormatOptionsX12OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet">ResetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransactionSet` <a name="ResetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```csharp
private void ResetTransactionSet()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput">TransactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet">TransactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransactionSetInput`<sup>Optional</sup> <a name="TransactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```csharp
public string TransactionSetInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```csharp
public string TransactionSet { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionFormatOptionsX12 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---


### B2BiTransformerInputConversionOutputReference <a name="B2BiTransformerInputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerInputConversionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions">PutAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions">PutFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat">ResetFromFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedOptions` <a name="PutAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions"></a>

```csharp
private void PutAdvancedOptions(B2BiTransformerInputConversionAdvancedOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---

##### `PutFormatOptions` <a name="PutFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions"></a>

```csharp
private void PutFormatOptions(B2BiTransformerInputConversionFormatOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions"></a>

```csharp
private void ResetAdvancedOptions()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions"></a>

```csharp
private void ResetFormatOptions()
```

##### `ResetFromFormat` <a name="ResetFromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat"></a>

```csharp
private void ResetFromFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput">FromFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat">FromFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions"></a>

```csharp
public B2BiTransformerInputConversionAdvancedOptionsOutputReference AdvancedOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a>

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions"></a>

```csharp
public B2BiTransformerInputConversionFormatOptionsOutputReference FormatOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a>

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionAdvancedOptions AdvancedOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerInputConversionFormatOptions FormatOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---

##### `FromFormatInput`<sup>Optional</sup> <a name="FromFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput"></a>

```csharp
public string FromFormatInput { get; }
```

- *Type:* string

---

##### `FromFormat`<sup>Required</sup> <a name="FromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat"></a>

```csharp
public string FromFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerInputConversion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---


### B2BiTransformerMappingOutputReference <a name="B2BiTransformerMappingOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage">ResetTemplateLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate"></a>

```csharp
private void ResetTemplate()
```

##### `ResetTemplateLanguage` <a name="ResetTemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage"></a>

```csharp
private void ResetTemplateLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput">TemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput">TemplateLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template">Template</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage">TemplateLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput"></a>

```csharp
public string TemplateInput { get; }
```

- *Type:* string

---

##### `TemplateLanguageInput`<sup>Optional</sup> <a name="TemplateLanguageInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput"></a>

```csharp
public string TemplateLanguageInput { get; }
```

- *Type:* string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template"></a>

```csharp
public string Template { get; }
```

- *Type:* string

---

##### `TemplateLanguage`<sup>Required</sup> <a name="TemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage"></a>

```csharp
public string TemplateLanguage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerMapping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12"></a>

```csharp
private void PutX12(B2BiTransformerOutputConversionAdvancedOptionsX12 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12"></a>

```csharp
private void ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference X12 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12 X12Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions">PutSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions">PutValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">ResetSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">ResetValidationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSplitOptions` <a name="PutSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```csharp
private void PutSplitOptions(B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `PutValidationOptions` <a name="PutValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```csharp
private void PutValidationOptions(B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `ResetSplitOptions` <a name="ResetSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```csharp
private void ResetSplitOptions()
```

##### `ResetValidationOptions` <a name="ResetValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```csharp
private void ResetValidationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">SplitOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">ValidationOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SplitOptions`<sup>Required</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference SplitOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `ValidationOptions`<sup>Required</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference ValidationOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `SplitOptionsInput`<sup>Optional</sup> <a name="SplitOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions SplitOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `ValidationOptionsInput`<sup>Optional</sup> <a name="ValidationOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions ValidationOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">ResetSplitBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSplitBy` <a name="ResetSplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```csharp
private void ResetSplitBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">SplitByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">SplitBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SplitByInput`<sup>Optional</sup> <a name="SplitByInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```csharp
public string SplitByInput { get; }
```

- *Type:* string

---

##### `SplitBy`<sup>Required</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```csharp
public string SplitBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">PutValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">ResetValidationRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValidationRules` <a name="PutValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```csharp
private void PutValidationRules(IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `ResetValidationRules` <a name="ResetValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```csharp
private void ResetValidationRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">ValidationRules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">ValidationRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValidationRules`<sup>Required</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList ValidationRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `ValidationRulesInput`<sup>Optional</sup> <a name="ValidationRulesInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] ValidationRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">ResetCodesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">ResetCodesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodesToAdd` <a name="ResetCodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```csharp
private void ResetCodesToAdd()
```

##### `ResetCodesToRemove` <a name="ResetCodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```csharp
private void ResetCodesToRemove()
```

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```csharp
private void ResetElementId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">CodesToAddInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">CodesToRemoveInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">CodesToAdd</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">CodesToRemove</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodesToAddInput`<sup>Optional</sup> <a name="CodesToAddInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```csharp
public string[] CodesToAddInput { get; }
```

- *Type:* string[]

---

##### `CodesToRemoveInput`<sup>Optional</sup> <a name="CodesToRemoveInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```csharp
public string[] CodesToRemoveInput { get; }
```

- *Type:* string[]

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `CodesToAdd`<sup>Required</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```csharp
public string[] CodesToAdd { get; }
```

- *Type:* string[]

---

##### `CodesToRemove`<sup>Required</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```csharp
public string[] CodesToRemove { get; }
```

- *Type:* string[]

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```csharp
private void ResetElementId()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```csharp
private void ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```csharp
public string ElementIdInput { get; }
```

- *Type:* string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```csharp
public string ElementId { get; }
```

- *Type:* string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">ResetElementPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementPosition` <a name="ResetElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```csharp
private void ResetElementPosition()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```csharp
private void ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">ElementPositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">RequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">ElementPosition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">Requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementPositionInput`<sup>Optional</sup> <a name="ElementPositionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```csharp
public string ElementPositionInput { get; }
```

- *Type:* string

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```csharp
public string RequirementInput { get; }
```

- *Type:* string

---

##### `ElementPosition`<sup>Required</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```csharp
public string ElementPosition { get; }
```

- *Type:* string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```csharp
public string Requirement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```csharp
private B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>[]

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">PutCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">PutElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">PutElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">ResetCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">ResetElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">ResetElementRequirementValidationRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeListValidationRule` <a name="PutCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```csharp
private void PutCodeListValidationRule(B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `PutElementLengthValidationRule` <a name="PutElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```csharp
private void PutElementLengthValidationRule(B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `PutElementRequirementValidationRule` <a name="PutElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```csharp
private void PutElementRequirementValidationRule(B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `ResetCodeListValidationRule` <a name="ResetCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```csharp
private void ResetCodeListValidationRule()
```

##### `ResetElementLengthValidationRule` <a name="ResetElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```csharp
private void ResetElementLengthValidationRule()
```

##### `ResetElementRequirementValidationRule` <a name="ResetElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```csharp
private void ResetElementRequirementValidationRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">CodeListValidationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">ElementLengthValidationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">ElementRequirementValidationRuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeListValidationRule`<sup>Required</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference CodeListValidationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `ElementLengthValidationRule`<sup>Required</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference ElementLengthValidationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `ElementRequirementValidationRule`<sup>Required</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference ElementRequirementValidationRule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `CodeListValidationRuleInput`<sup>Optional</sup> <a name="CodeListValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule CodeListValidationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `ElementLengthValidationRuleInput`<sup>Optional</sup> <a name="ElementLengthValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule ElementLengthValidationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `ElementRequirementValidationRuleInput`<sup>Optional</sup> <a name="ElementRequirementValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule ElementRequirementValidationRuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules</a>

---


### B2BiTransformerOutputConversionFormatOptionsOutputReference <a name="B2BiTransformerOutputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionFormatOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12"></a>

```csharp
private void PutX12(B2BiTransformerOutputConversionFormatOptionsX12 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12"></a>

```csharp
private void ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12"></a>

```csharp
public B2BiTransformerOutputConversionFormatOptionsX12OutputReference X12 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionFormatOptionsX12 X12Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionFormatOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---


### B2BiTransformerOutputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerOutputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionFormatOptionsX12OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet">ResetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransactionSet` <a name="ResetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```csharp
private void ResetTransactionSet()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput">TransactionSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet">TransactionSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TransactionSetInput`<sup>Optional</sup> <a name="TransactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```csharp
public string TransactionSetInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```csharp
public string TransactionSet { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionFormatOptionsX12 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---


### B2BiTransformerOutputConversionOutputReference <a name="B2BiTransformerOutputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerOutputConversionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions">PutAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions">PutFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat">ResetToFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedOptions` <a name="PutAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions"></a>

```csharp
private void PutAdvancedOptions(B2BiTransformerOutputConversionAdvancedOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---

##### `PutFormatOptions` <a name="PutFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions"></a>

```csharp
private void PutFormatOptions(B2BiTransformerOutputConversionFormatOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions"></a>

```csharp
private void ResetAdvancedOptions()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions"></a>

```csharp
private void ResetFormatOptions()
```

##### `ResetToFormat` <a name="ResetToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat"></a>

```csharp
private void ResetToFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput">ToFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat">ToFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions"></a>

```csharp
public B2BiTransformerOutputConversionAdvancedOptionsOutputReference AdvancedOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a>

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions"></a>

```csharp
public B2BiTransformerOutputConversionFormatOptionsOutputReference FormatOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a>

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionAdvancedOptions AdvancedOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversionFormatOptions FormatOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---

##### `ToFormatInput`<sup>Optional</sup> <a name="ToFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput"></a>

```csharp
public string ToFormatInput { get; }
```

- *Type:* string

---

##### `ToFormat`<sup>Required</sup> <a name="ToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat"></a>

```csharp
public string ToFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerOutputConversion InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---


### B2BiTransformerSampleDocumentsKeysList <a name="B2BiTransformerSampleDocumentsKeysList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerSampleDocumentsKeysList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get"></a>

```csharp
private B2BiTransformerSampleDocumentsKeysOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerSampleDocumentsKeys[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

---


### B2BiTransformerSampleDocumentsKeysOutputReference <a name="B2BiTransformerSampleDocumentsKeysOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerSampleDocumentsKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput">InputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput">OutputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input">Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output">Output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput"></a>

```csharp
public string InputInput { get; }
```

- *Type:* string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput"></a>

```csharp
public string OutputInput { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input"></a>

```csharp
public string Input { get; }
```

- *Type:* string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output"></a>

```csharp
public string Output { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerSampleDocumentsKeys InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>

---


### B2BiTransformerSampleDocumentsOutputReference <a name="B2BiTransformerSampleDocumentsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerSampleDocumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys">PutKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeys` <a name="PutKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys"></a>

```csharp
private void PutKeys(IResolvable|B2BiTransformerSampleDocumentsKeys[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys"></a>

```csharp
private void ResetKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys">Keys</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput">KeysInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys"></a>

```csharp
public B2BiTransformerSampleDocumentsKeysList Keys { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput"></a>

```csharp
public IResolvable|B2BiTransformerSampleDocumentsKeys[] KeysInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys">B2BiTransformerSampleDocumentsKeys</a>[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerSampleDocuments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---


### B2BiTransformerTagsList <a name="B2BiTransformerTagsList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get"></a>

```csharp
private B2BiTransformerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>[]

---


### B2BiTransformerTagsOutputReference <a name="B2BiTransformerTagsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new B2BiTransformerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|B2BiTransformerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags">B2BiTransformerTags</a>

---



