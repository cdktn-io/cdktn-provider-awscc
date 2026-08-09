# `osisPipeline` Submodule <a name="`osisPipeline` Submodule" id="@cdktn/provider-awscc.osisPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OsisPipeline <a name="OsisPipeline" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline awscc_osis_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipeline(Construct Scope, string Id, OsisPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig">OsisPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig">OsisPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions">PutBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions">PutEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions">PutLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy">PutResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions">PutVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions">ResetBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions">ResetEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions">ResetLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn">ResetPipelineRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy">ResetResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions">ResetVpcOptions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBufferOptions` <a name="PutBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions"></a>

```csharp
private void PutBufferOptions(OsisPipelineBufferOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putBufferOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `PutEncryptionAtRestOptions` <a name="PutEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions"></a>

```csharp
private void PutEncryptionAtRestOptions(OsisPipelineEncryptionAtRestOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putEncryptionAtRestOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `PutLogPublishingOptions` <a name="PutLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions"></a>

```csharp
private void PutLogPublishingOptions(OsisPipelineLogPublishingOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putLogPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `PutResourcePolicy` <a name="PutResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy"></a>

```csharp
private void PutResourcePolicy(OsisPipelineResourcePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putResourcePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags"></a>

```csharp
private void PutTags(IResolvable|OsisPipelineTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

---

##### `PutVpcOptions` <a name="PutVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions"></a>

```csharp
private void PutVpcOptions(OsisPipelineVpcOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.putVpcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `ResetBufferOptions` <a name="ResetBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetBufferOptions"></a>

```csharp
private void ResetBufferOptions()
```

##### `ResetEncryptionAtRestOptions` <a name="ResetEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetEncryptionAtRestOptions"></a>

```csharp
private void ResetEncryptionAtRestOptions()
```

##### `ResetLogPublishingOptions` <a name="ResetLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetLogPublishingOptions"></a>

```csharp
private void ResetLogPublishingOptions()
```

##### `ResetPipelineRoleArn` <a name="ResetPipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetPipelineRoleArn"></a>

```csharp
private void ResetPipelineRoleArn()
```

##### `ResetResourcePolicy` <a name="ResetResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetResourcePolicy"></a>

```csharp
private void ResetResourcePolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVpcOptions` <a name="ResetVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.resetVpcOptions"></a>

```csharp
private void ResetVpcOptions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OsisPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OsisPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OsisPipeline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

OsisPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OsisPipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OsisPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OsisPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OsisPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions">BufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls">IngestEndpointUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn">PipelineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints">VpcEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService">VpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput">BufferOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput">EncryptionAtRestOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput">LogPublishingOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput">MaxUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput">MinUnitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput">PipelineConfigurationBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput">PipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput">PipelineRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput">ResourcePolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput">VpcOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits">MaxUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits">MinUnits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody">PipelineConfigurationBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn">PipelineRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BufferOptions`<sup>Required</sup> <a name="BufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptions"></a>

```csharp
public OsisPipelineBufferOptionsOutputReference BufferOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference">OsisPipelineBufferOptionsOutputReference</a>

---

##### `EncryptionAtRestOptions`<sup>Required</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptions"></a>

```csharp
public OsisPipelineEncryptionAtRestOptionsOutputReference EncryptionAtRestOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference">OsisPipelineEncryptionAtRestOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IngestEndpointUrls`<sup>Required</sup> <a name="IngestEndpointUrls" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.ingestEndpointUrls"></a>

```csharp
public string[] IngestEndpointUrls { get; }
```

- *Type:* string[]

---

##### `LogPublishingOptions`<sup>Required</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptions"></a>

```csharp
public OsisPipelineLogPublishingOptionsOutputReference LogPublishingOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference">OsisPipelineLogPublishingOptionsOutputReference</a>

---

##### `PipelineArn`<sup>Required</sup> <a name="PipelineArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineArn"></a>

```csharp
public string PipelineArn { get; }
```

- *Type:* string

---

##### `ResourcePolicy`<sup>Required</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicy"></a>

```csharp
public OsisPipelineResourcePolicyOutputReference ResourcePolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference">OsisPipelineResourcePolicyOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tags"></a>

```csharp
public OsisPipelineTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList">OsisPipelineTagsList</a>

---

##### `VpcEndpoints`<sup>Required</sup> <a name="VpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpoints"></a>

```csharp
public OsisPipelineVpcEndpointsList VpcEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList">OsisPipelineVpcEndpointsList</a>

---

##### `VpcEndpointService`<sup>Required</sup> <a name="VpcEndpointService" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcEndpointService"></a>

```csharp
public string VpcEndpointService { get; }
```

- *Type:* string

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptions"></a>

```csharp
public OsisPipelineVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference">OsisPipelineVpcOptionsOutputReference</a>

---

##### `BufferOptionsInput`<sup>Optional</sup> <a name="BufferOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.bufferOptionsInput"></a>

```csharp
public IResolvable|OsisPipelineBufferOptions BufferOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---

##### `EncryptionAtRestOptionsInput`<sup>Optional</sup> <a name="EncryptionAtRestOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.encryptionAtRestOptionsInput"></a>

```csharp
public IResolvable|OsisPipelineEncryptionAtRestOptions EncryptionAtRestOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---

##### `LogPublishingOptionsInput`<sup>Optional</sup> <a name="LogPublishingOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.logPublishingOptionsInput"></a>

```csharp
public IResolvable|OsisPipelineLogPublishingOptions LogPublishingOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---

##### `MaxUnitsInput`<sup>Optional</sup> <a name="MaxUnitsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnitsInput"></a>

```csharp
public double MaxUnitsInput { get; }
```

- *Type:* double

---

##### `MinUnitsInput`<sup>Optional</sup> <a name="MinUnitsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnitsInput"></a>

```csharp
public double MinUnitsInput { get; }
```

- *Type:* double

---

##### `PipelineConfigurationBodyInput`<sup>Optional</sup> <a name="PipelineConfigurationBodyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBodyInput"></a>

```csharp
public string PipelineConfigurationBodyInput { get; }
```

- *Type:* string

---

##### `PipelineNameInput`<sup>Optional</sup> <a name="PipelineNameInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineNameInput"></a>

```csharp
public string PipelineNameInput { get; }
```

- *Type:* string

---

##### `PipelineRoleArnInput`<sup>Optional</sup> <a name="PipelineRoleArnInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArnInput"></a>

```csharp
public string PipelineRoleArnInput { get; }
```

- *Type:* string

---

##### `ResourcePolicyInput`<sup>Optional</sup> <a name="ResourcePolicyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.resourcePolicyInput"></a>

```csharp
public IResolvable|OsisPipelineResourcePolicy ResourcePolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tagsInput"></a>

```csharp
public IResolvable|OsisPipelineTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

---

##### `VpcOptionsInput`<sup>Optional</sup> <a name="VpcOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.vpcOptionsInput"></a>

```csharp
public IResolvable|OsisPipelineVpcOptions VpcOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---

##### `MaxUnits`<sup>Required</sup> <a name="MaxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.maxUnits"></a>

```csharp
public double MaxUnits { get; }
```

- *Type:* double

---

##### `MinUnits`<sup>Required</sup> <a name="MinUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.minUnits"></a>

```csharp
public double MinUnits { get; }
```

- *Type:* double

---

##### `PipelineConfigurationBody`<sup>Required</sup> <a name="PipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineConfigurationBody"></a>

```csharp
public string PipelineConfigurationBody { get; }
```

- *Type:* string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `PipelineRoleArn`<sup>Required</sup> <a name="PipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.pipelineRoleArn"></a>

```csharp
public string PipelineRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.osisPipeline.OsisPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OsisPipelineBufferOptions <a name="OsisPipelineBufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineBufferOptions {
    bool|IResolvable PersistentBufferEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled">PersistentBufferEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether persistent buffering should be enabled. |

---

##### `PersistentBufferEnabled`<sup>Optional</sup> <a name="PersistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions.property.persistentBufferEnabled"></a>

```csharp
public bool|IResolvable PersistentBufferEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether persistent buffering should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#persistent_buffer_enabled OsisPipeline#persistent_buffer_enabled}

---

### OsisPipelineConfig <a name="OsisPipelineConfig" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double MaxUnits,
    double MinUnits,
    string PipelineConfigurationBody,
    string PipelineName,
    OsisPipelineBufferOptions BufferOptions = null,
    OsisPipelineEncryptionAtRestOptions EncryptionAtRestOptions = null,
    OsisPipelineLogPublishingOptions LogPublishingOptions = null,
    string PipelineRoleArn = null,
    OsisPipelineResourcePolicy ResourcePolicy = null,
    IResolvable|OsisPipelineTags[] Tags = null,
    OsisPipelineVpcOptions VpcOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits">MaxUnits</a></code> | <code>double</code> | The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits">MinUnits</a></code> | <code>double</code> | The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs). |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody">PipelineConfigurationBody</a></code> | <code>string</code> | The Data Prepper pipeline configuration. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName">PipelineName</a></code> | <code>string</code> | Name of the OpenSearch Ingestion Service pipeline to create. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions">BufferOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | Key-value pairs to configure buffering. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions">EncryptionAtRestOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | Key-value pairs to configure encryption at rest. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions">LogPublishingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | Key-value pairs to configure log publishing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn">PipelineRoleArn</a></code> | <code>string</code> | The Pipeline Role (ARN) for the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy">ResourcePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | Container for the values required to configure VPC access for the pipeline. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `MaxUnits`<sup>Required</sup> <a name="MaxUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.maxUnits"></a>

```csharp
public double MaxUnits { get; set; }
```

- *Type:* double

The maximum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#max_units OsisPipeline#max_units}

---

##### `MinUnits`<sup>Required</sup> <a name="MinUnits" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.minUnits"></a>

```csharp
public double MinUnits { get; set; }
```

- *Type:* double

The minimum pipeline capacity, in Ingestion OpenSearch Compute Units (OCUs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#min_units OsisPipeline#min_units}

---

##### `PipelineConfigurationBody`<sup>Required</sup> <a name="PipelineConfigurationBody" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineConfigurationBody"></a>

```csharp
public string PipelineConfigurationBody { get; set; }
```

- *Type:* string

The Data Prepper pipeline configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#pipeline_configuration_body OsisPipeline#pipeline_configuration_body}

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineName"></a>

```csharp
public string PipelineName { get; set; }
```

- *Type:* string

Name of the OpenSearch Ingestion Service pipeline to create.

Pipeline names are unique across the pipelines owned by an account within an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#pipeline_name OsisPipeline#pipeline_name}

---

##### `BufferOptions`<sup>Optional</sup> <a name="BufferOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.bufferOptions"></a>

```csharp
public OsisPipelineBufferOptions BufferOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

Key-value pairs to configure buffering.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#buffer_options OsisPipeline#buffer_options}

---

##### `EncryptionAtRestOptions`<sup>Optional</sup> <a name="EncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.encryptionAtRestOptions"></a>

```csharp
public OsisPipelineEncryptionAtRestOptions EncryptionAtRestOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

Key-value pairs to configure encryption at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#encryption_at_rest_options OsisPipeline#encryption_at_rest_options}

---

##### `LogPublishingOptions`<sup>Optional</sup> <a name="LogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.logPublishingOptions"></a>

```csharp
public OsisPipelineLogPublishingOptions LogPublishingOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

Key-value pairs to configure log publishing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#log_publishing_options OsisPipeline#log_publishing_options}

---

##### `PipelineRoleArn`<sup>Optional</sup> <a name="PipelineRoleArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.pipelineRoleArn"></a>

```csharp
public string PipelineRoleArn { get; set; }
```

- *Type:* string

The Pipeline Role (ARN) for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#pipeline_role_arn OsisPipeline#pipeline_role_arn}

---

##### `ResourcePolicy`<sup>Optional</sup> <a name="ResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.resourcePolicy"></a>

```csharp
public OsisPipelineResourcePolicy ResourcePolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#resource_policy OsisPipeline#resource_policy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.tags"></a>

```csharp
public IResolvable|OsisPipelineTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#tags OsisPipeline#tags}

---

##### `VpcOptions`<sup>Optional</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineConfig.property.vpcOptions"></a>

```csharp
public OsisPipelineVpcOptions VpcOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

Container for the values required to configure VPC access for the pipeline.

If you don't specify these values, OpenSearch Ingestion Service creates the pipeline with a public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#vpc_options OsisPipeline#vpc_options}

---

### OsisPipelineEncryptionAtRestOptions <a name="OsisPipelineEncryptionAtRestOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineEncryptionAtRestOptions {
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | The KMS key to use for encrypting data. By default an AWS owned key is used. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

The KMS key to use for encrypting data. By default an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#kms_key_arn OsisPipeline#kms_key_arn}

---

### OsisPipelineLogPublishingOptions <a name="OsisPipelineLogPublishingOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineLogPublishingOptions {
    OsisPipelineLogPublishingOptionsCloudwatchLogDestination CloudwatchLogDestination = null,
    bool|IResolvable IsLoggingEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination">CloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled">IsLoggingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether logs should be published. |

---

##### `CloudwatchLogDestination`<sup>Optional</sup> <a name="CloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.cloudwatchLogDestination"></a>

```csharp
public OsisPipelineLogPublishingOptionsCloudwatchLogDestination CloudwatchLogDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#cloudwatch_log_destination OsisPipeline#cloudwatch_log_destination}

---

##### `IsLoggingEnabled`<sup>Optional</sup> <a name="IsLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions.property.isLoggingEnabled"></a>

```csharp
public bool|IResolvable IsLoggingEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether logs should be published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#is_logging_enabled OsisPipeline#is_logging_enabled}

---

### OsisPipelineLogPublishingOptionsCloudwatchLogDestination <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineLogPublishingOptionsCloudwatchLogDestination {
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#log_group OsisPipeline#log_group}.

---

### OsisPipelineResourcePolicy <a name="OsisPipelineResourcePolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineResourcePolicy {
    string Policy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy">Policy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}. |

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy.property.policy"></a>

```csharp
public string Policy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#policy OsisPipeline#policy}.

---

### OsisPipelineTags <a name="OsisPipelineTags" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#key OsisPipeline#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#value OsisPipeline#value}

---

### OsisPipelineVpcEndpoints <a name="OsisPipelineVpcEndpoints" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpoints {

};
```


### OsisPipelineVpcEndpointsVpcOptions <a name="OsisPipelineVpcEndpointsVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpointsVpcOptions {

};
```


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions {

};
```


### OsisPipelineVpcOptions <a name="OsisPipelineVpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcOptions {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null,
    OsisPipelineVpcOptionsVpcAttachmentOptions VpcAttachmentOptions = null,
    string VpcEndpointManagement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | A list of security groups associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | A list of subnet IDs associated with the VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions">VpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | Options for attaching a VPC to the pipeline. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement">VpcEndpointManagement</a></code> | <code>string</code> | Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of security groups associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#security_group_ids OsisPipeline#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

A list of subnet IDs associated with the VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#subnet_ids OsisPipeline#subnet_ids}

---

##### `VpcAttachmentOptions`<sup>Optional</sup> <a name="VpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcAttachmentOptions"></a>

```csharp
public OsisPipelineVpcOptionsVpcAttachmentOptions VpcAttachmentOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

Options for attaching a VPC to the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#vpc_attachment_options OsisPipeline#vpc_attachment_options}

---

##### `VpcEndpointManagement`<sup>Optional</sup> <a name="VpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions.property.vpcEndpointManagement"></a>

```csharp
public string VpcEndpointManagement { get; set; }
```

- *Type:* string

Defines whether you or Amazon OpenSearch Ingestion service create and manage the VPC endpoint configured for the pipeline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#vpc_endpoint_management OsisPipeline#vpc_endpoint_management}

---

### OsisPipelineVpcOptionsVpcAttachmentOptions <a name="OsisPipelineVpcOptionsVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcOptionsVpcAttachmentOptions {
    bool|IResolvable AttachToVpc = null,
    string CidrBlock = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc">AttachToVpc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the pipeline should be attached to the provided VPC. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs). |

---

##### `AttachToVpc`<sup>Optional</sup> <a name="AttachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.attachToVpc"></a>

```csharp
public bool|IResolvable AttachToVpc { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the pipeline should be attached to the provided VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#attach_to_vpc OsisPipeline#attach_to_vpc}

---

##### `CidrBlock`<sup>Optional</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; set; }
```

- *Type:* string

The CIDR block to be reserved for OpenSearch Ingestion to create elastic network interfaces (ENIs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/osis_pipeline#cidr_block OsisPipeline#cidr_block}

---

## Classes <a name="Classes" id="Classes"></a>

### OsisPipelineBufferOptionsOutputReference <a name="OsisPipelineBufferOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineBufferOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled">ResetPersistentBufferEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPersistentBufferEnabled` <a name="ResetPersistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.resetPersistentBufferEnabled"></a>

```csharp
private void ResetPersistentBufferEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput">PersistentBufferEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled">PersistentBufferEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PersistentBufferEnabledInput`<sup>Optional</sup> <a name="PersistentBufferEnabledInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabledInput"></a>

```csharp
public bool|IResolvable PersistentBufferEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PersistentBufferEnabled`<sup>Required</sup> <a name="PersistentBufferEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.persistentBufferEnabled"></a>

```csharp
public bool|IResolvable PersistentBufferEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineBufferOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineBufferOptions">OsisPipelineBufferOptions</a>

---


### OsisPipelineEncryptionAtRestOptionsOutputReference <a name="OsisPipelineEncryptionAtRestOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineEncryptionAtRestOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineEncryptionAtRestOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineEncryptionAtRestOptions">OsisPipelineEncryptionAtRestOptions</a>

---


### OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference <a name="OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineLogPublishingOptionsCloudwatchLogDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---


### OsisPipelineLogPublishingOptionsOutputReference <a name="OsisPipelineLogPublishingOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineLogPublishingOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination">PutCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination">ResetCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled">ResetIsLoggingEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogDestination` <a name="PutCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination"></a>

```csharp
private void PutCloudwatchLogDestination(OsisPipelineLogPublishingOptionsCloudwatchLogDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.putCloudwatchLogDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `ResetCloudwatchLogDestination` <a name="ResetCloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetCloudwatchLogDestination"></a>

```csharp
private void ResetCloudwatchLogDestination()
```

##### `ResetIsLoggingEnabled` <a name="ResetIsLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.resetIsLoggingEnabled"></a>

```csharp
private void ResetIsLoggingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination">CloudwatchLogDestination</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput">CloudwatchLogDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput">IsLoggingEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled">IsLoggingEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogDestination`<sup>Required</sup> <a name="CloudwatchLogDestination" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestination"></a>

```csharp
public OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference CloudwatchLogDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference">OsisPipelineLogPublishingOptionsCloudwatchLogDestinationOutputReference</a>

---

##### `CloudwatchLogDestinationInput`<sup>Optional</sup> <a name="CloudwatchLogDestinationInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.cloudwatchLogDestinationInput"></a>

```csharp
public IResolvable|OsisPipelineLogPublishingOptionsCloudwatchLogDestination CloudwatchLogDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsCloudwatchLogDestination">OsisPipelineLogPublishingOptionsCloudwatchLogDestination</a>

---

##### `IsLoggingEnabledInput`<sup>Optional</sup> <a name="IsLoggingEnabledInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabledInput"></a>

```csharp
public bool|IResolvable IsLoggingEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsLoggingEnabled`<sup>Required</sup> <a name="IsLoggingEnabled" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.isLoggingEnabled"></a>

```csharp
public bool|IResolvable IsLoggingEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineLogPublishingOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineLogPublishingOptions">OsisPipelineLogPublishingOptions</a>

---


### OsisPipelineResourcePolicyOutputReference <a name="OsisPipelineResourcePolicyOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineResourcePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.resetPolicy"></a>

```csharp
private void ResetPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput">PolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy">Policy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policyInput"></a>

```csharp
public string PolicyInput { get; }
```

- *Type:* string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.policy"></a>

```csharp
public string Policy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineResourcePolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineResourcePolicy">OsisPipelineResourcePolicy</a>

---


### OsisPipelineTagsList <a name="OsisPipelineTagsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get"></a>

```csharp
private OsisPipelineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsList.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>[]

---


### OsisPipelineTagsOutputReference <a name="OsisPipelineTagsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineTags">OsisPipelineTags</a>

---


### OsisPipelineVpcEndpointsList <a name="OsisPipelineVpcEndpointsList" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get"></a>

```csharp
private OsisPipelineVpcEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OsisPipelineVpcEndpointsOutputReference <a name="OsisPipelineVpcEndpointsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId">VpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions">VpcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcEndpointId"></a>

```csharp
public string VpcEndpointId { get; }
```

- *Type:* string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `VpcOptions`<sup>Required</sup> <a name="VpcOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.vpcOptions"></a>

```csharp
public OsisPipelineVpcEndpointsVpcOptionsOutputReference VpcOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsOutputReference.property.internalValue"></a>

```csharp
public OsisPipelineVpcEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpoints">OsisPipelineVpcEndpoints</a>

---


### OsisPipelineVpcEndpointsVpcOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpointsVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions">VpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement">VpcEndpointManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcAttachmentOptions`<sup>Required</sup> <a name="VpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```csharp
public OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference VpcAttachmentOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `VpcEndpointManagement`<sup>Required</sup> <a name="VpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```csharp
public string VpcEndpointManagement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public OsisPipelineVpcEndpointsVpcOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptions">OsisPipelineVpcEndpointsVpcOptions</a>

---


### OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">AttachToVpc</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachToVpc`<sup>Required</sup> <a name="AttachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```csharp
public IResolvable AttachToVpc { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions">OsisPipelineVpcEndpointsVpcOptionsVpcAttachmentOptions</a>

---


### OsisPipelineVpcOptionsOutputReference <a name="OsisPipelineVpcOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions">PutVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions">ResetVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement">ResetVpcEndpointManagement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcAttachmentOptions` <a name="PutVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions"></a>

```csharp
private void PutVpcAttachmentOptions(OsisPipelineVpcOptionsVpcAttachmentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.putVpcAttachmentOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetVpcAttachmentOptions` <a name="ResetVpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcAttachmentOptions"></a>

```csharp
private void ResetVpcAttachmentOptions()
```

##### `ResetVpcEndpointManagement` <a name="ResetVpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.resetVpcEndpointManagement"></a>

```csharp
private void ResetVpcEndpointManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions">VpcAttachmentOptions</a></code> | <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput">VpcAttachmentOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput">VpcEndpointManagementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement">VpcEndpointManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcAttachmentOptions`<sup>Required</sup> <a name="VpcAttachmentOptions" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptions"></a>

```csharp
public OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference VpcAttachmentOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference">OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `VpcAttachmentOptionsInput`<sup>Optional</sup> <a name="VpcAttachmentOptionsInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcAttachmentOptionsInput"></a>

```csharp
public IResolvable|OsisPipelineVpcOptionsVpcAttachmentOptions VpcAttachmentOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---

##### `VpcEndpointManagementInput`<sup>Optional</sup> <a name="VpcEndpointManagementInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagementInput"></a>

```csharp
public string VpcEndpointManagementInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcEndpointManagement`<sup>Required</sup> <a name="VpcEndpointManagement" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.vpcEndpointManagement"></a>

```csharp
public string VpcEndpointManagement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineVpcOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptions">OsisPipelineVpcOptions</a>

---


### OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference <a name="OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc">ResetAttachToVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock">ResetCidrBlock</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachToVpc` <a name="ResetAttachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetAttachToVpc"></a>

```csharp
private void ResetAttachToVpc()
```

##### `ResetCidrBlock` <a name="ResetCidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.resetCidrBlock"></a>

```csharp
private void ResetCidrBlock()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput">AttachToVpcInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput">CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc">AttachToVpc</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock">CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttachToVpcInput`<sup>Optional</sup> <a name="AttachToVpcInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpcInput"></a>

```csharp
public bool|IResolvable AttachToVpcInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CidrBlockInput`<sup>Optional</sup> <a name="CidrBlockInput" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlockInput"></a>

```csharp
public string CidrBlockInput { get; }
```

- *Type:* string

---

##### `AttachToVpc`<sup>Required</sup> <a name="AttachToVpc" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.attachToVpc"></a>

```csharp
public bool|IResolvable AttachToVpc { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CidrBlock`<sup>Required</sup> <a name="CidrBlock" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.cidrBlock"></a>

```csharp
public string CidrBlock { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|OsisPipelineVpcOptionsVpcAttachmentOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.osisPipeline.OsisPipelineVpcOptionsVpcAttachmentOptions">OsisPipelineVpcOptionsVpcAttachmentOptions</a>

---



