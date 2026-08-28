# `wisdomKnowledgeBase` Submodule <a name="`wisdomKnowledgeBase` Submodule" id="@cdktn/provider-awscc.wisdomKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomKnowledgeBase <a name="WisdomKnowledgeBase" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base awscc_wisdom_knowledge_base}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBase(Construct Scope, string Id, WisdomKnowledgeBaseConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig">WisdomKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig">WisdomKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putRenderingConfiguration">PutRenderingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putServerSideEncryptionConfiguration">PutServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putSourceConfiguration">PutSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putVectorIngestionConfiguration">PutVectorIngestionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetRenderingConfiguration">ResetRenderingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetServerSideEncryptionConfiguration">ResetServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetSourceConfiguration">ResetSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetVectorIngestionConfiguration">ResetVectorIngestionConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRenderingConfiguration` <a name="PutRenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putRenderingConfiguration"></a>

```csharp
private void PutRenderingConfiguration(WisdomKnowledgeBaseRenderingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putRenderingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

---

##### `PutServerSideEncryptionConfiguration` <a name="PutServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putServerSideEncryptionConfiguration"></a>

```csharp
private void PutServerSideEncryptionConfiguration(WisdomKnowledgeBaseServerSideEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putSourceConfiguration"></a>

```csharp
private void PutSourceConfiguration(WisdomKnowledgeBaseSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putTags"></a>

```csharp
private void PutTags(IResolvable|WisdomKnowledgeBaseTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]

---

##### `PutVectorIngestionConfiguration` <a name="PutVectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putVectorIngestionConfiguration"></a>

```csharp
private void PutVectorIngestionConfiguration(WisdomKnowledgeBaseVectorIngestionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.putVectorIngestionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetRenderingConfiguration` <a name="ResetRenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetRenderingConfiguration"></a>

```csharp
private void ResetRenderingConfiguration()
```

##### `ResetServerSideEncryptionConfiguration` <a name="ResetServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetServerSideEncryptionConfiguration"></a>

```csharp
private void ResetServerSideEncryptionConfiguration()
```

##### `ResetSourceConfiguration` <a name="ResetSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetSourceConfiguration"></a>

```csharp
private void ResetSourceConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVectorIngestionConfiguration` <a name="ResetVectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.resetVectorIngestionConfiguration"></a>

```csharp
private void ResetVectorIngestionConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomKnowledgeBase resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomKnowledgeBase.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomKnowledgeBase.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomKnowledgeBase.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WisdomKnowledgeBase.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WisdomKnowledgeBase resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WisdomKnowledgeBase to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WisdomKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WisdomKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfiguration">RenderingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference">WisdomKnowledgeBaseRenderingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList">WisdomKnowledgeBaseTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfiguration">VectorIngestionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseTypeInput">KnowledgeBaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfigurationInput">RenderingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfigurationInput">ServerSideEncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfigurationInput">VectorIngestionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseType">KnowledgeBaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseArn"></a>

```csharp
public string KnowledgeBaseArn { get; }
```

- *Type:* string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseId"></a>

```csharp
public string KnowledgeBaseId { get; }
```

- *Type:* string

---

##### `RenderingConfiguration`<sup>Required</sup> <a name="RenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseRenderingConfigurationOutputReference RenderingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference">WisdomKnowledgeBaseRenderingConfigurationOutputReference</a>

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfiguration"></a>

```csharp
public WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference ServerSideEncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference">WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference</a>

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationOutputReference SourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tags"></a>

```csharp
public WisdomKnowledgeBaseTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList">WisdomKnowledgeBaseTagsList</a>

---

##### `VectorIngestionConfiguration`<sup>Required</sup> <a name="VectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference VectorIngestionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `KnowledgeBaseTypeInput`<sup>Optional</sup> <a name="KnowledgeBaseTypeInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseTypeInput"></a>

```csharp
public string KnowledgeBaseTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RenderingConfigurationInput`<sup>Optional</sup> <a name="RenderingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.renderingConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseRenderingConfiguration RenderingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

---

##### `ServerSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="ServerSideEncryptionConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.serverSideEncryptionConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseServerSideEncryptionConfiguration ServerSideEncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.sourceConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfiguration SourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tagsInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]

---

##### `VectorIngestionConfigurationInput`<sup>Optional</sup> <a name="VectorIngestionConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.vectorIngestionConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfiguration VectorIngestionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KnowledgeBaseType`<sup>Required</sup> <a name="KnowledgeBaseType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.knowledgeBaseType"></a>

```csharp
public string KnowledgeBaseType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBase.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomKnowledgeBaseConfig <a name="WisdomKnowledgeBaseConfig" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string KnowledgeBaseType,
    string Name,
    string Description = null,
    WisdomKnowledgeBaseRenderingConfiguration RenderingConfiguration = null,
    WisdomKnowledgeBaseServerSideEncryptionConfiguration ServerSideEncryptionConfiguration = null,
    WisdomKnowledgeBaseSourceConfiguration SourceConfiguration = null,
    IResolvable|WisdomKnowledgeBaseTags[] Tags = null,
    WisdomKnowledgeBaseVectorIngestionConfiguration VectorIngestionConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.knowledgeBaseType">KnowledgeBaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.renderingConfiguration">RenderingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.vectorIngestionConfiguration">VectorIngestionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `KnowledgeBaseType`<sup>Required</sup> <a name="KnowledgeBaseType" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.knowledgeBaseType"></a>

```csharp
public string KnowledgeBaseType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#knowledge_base_type WisdomKnowledgeBase#knowledge_base_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#name WisdomKnowledgeBase#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#description WisdomKnowledgeBase#description}.

---

##### `RenderingConfiguration`<sup>Optional</sup> <a name="RenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.renderingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseRenderingConfiguration RenderingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#rendering_configuration WisdomKnowledgeBase#rendering_configuration}.

---

##### `ServerSideEncryptionConfiguration`<sup>Optional</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.serverSideEncryptionConfiguration"></a>

```csharp
public WisdomKnowledgeBaseServerSideEncryptionConfiguration ServerSideEncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#server_side_encryption_configuration WisdomKnowledgeBase#server_side_encryption_configuration}.

---

##### `SourceConfiguration`<sup>Optional</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.sourceConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfiguration SourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#source_configuration WisdomKnowledgeBase#source_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.tags"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#tags WisdomKnowledgeBase#tags}.

---

##### `VectorIngestionConfiguration`<sup>Optional</sup> <a name="VectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseConfig.property.vectorIngestionConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfiguration VectorIngestionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#vector_ingestion_configuration WisdomKnowledgeBase#vector_ingestion_configuration}.

---

### WisdomKnowledgeBaseRenderingConfiguration <a name="WisdomKnowledgeBaseRenderingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseRenderingConfiguration {
    string TemplateUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration.property.templateUri">TemplateUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#template_uri WisdomKnowledgeBase#template_uri}. |

---

##### `TemplateUri`<sup>Optional</sup> <a name="TemplateUri" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration.property.templateUri"></a>

```csharp
public string TemplateUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#template_uri WisdomKnowledgeBase#template_uri}.

---

### WisdomKnowledgeBaseServerSideEncryptionConfiguration <a name="WisdomKnowledgeBaseServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseServerSideEncryptionConfiguration {
    string KmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#kms_key_id WisdomKnowledgeBase#kms_key_id}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#kms_key_id WisdomKnowledgeBase#kms_key_id}.

---

### WisdomKnowledgeBaseSourceConfiguration <a name="WisdomKnowledgeBaseSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfiguration {
    WisdomKnowledgeBaseSourceConfigurationAppIntegrations AppIntegrations = null,
    WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration ManagedSourceConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.appIntegrations">AppIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#app_integrations WisdomKnowledgeBase#app_integrations}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.managedSourceConfiguration">ManagedSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#managed_source_configuration WisdomKnowledgeBase#managed_source_configuration}. |

---

##### `AppIntegrations`<sup>Optional</sup> <a name="AppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.appIntegrations"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationAppIntegrations AppIntegrations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#app_integrations WisdomKnowledgeBase#app_integrations}.

---

##### `ManagedSourceConfiguration`<sup>Optional</sup> <a name="ManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration.property.managedSourceConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration ManagedSourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#managed_source_configuration WisdomKnowledgeBase#managed_source_configuration}.

---

### WisdomKnowledgeBaseSourceConfigurationAppIntegrations <a name="WisdomKnowledgeBaseSourceConfigurationAppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationAppIntegrations {
    string AppIntegrationArn = null,
    string[] ObjectFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.appIntegrationArn">AppIntegrationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#app_integration_arn WisdomKnowledgeBase#app_integration_arn}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.objectFields">ObjectFields</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#object_fields WisdomKnowledgeBase#object_fields}. |

---

##### `AppIntegrationArn`<sup>Optional</sup> <a name="AppIntegrationArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.appIntegrationArn"></a>

```csharp
public string AppIntegrationArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#app_integration_arn WisdomKnowledgeBase#app_integration_arn}.

---

##### `ObjectFields`<sup>Optional</sup> <a name="ObjectFields" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations.property.objectFields"></a>

```csharp
public string[] ObjectFields { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#object_fields WisdomKnowledgeBase#object_fields}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration {
    WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration WebCrawlerConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.property.webCrawlerConfiguration">WebCrawlerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#web_crawler_configuration WisdomKnowledgeBase#web_crawler_configuration}. |

---

##### `WebCrawlerConfiguration`<sup>Optional</sup> <a name="WebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration.property.webCrawlerConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration WebCrawlerConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#web_crawler_configuration WisdomKnowledgeBase#web_crawler_configuration}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration {
    WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits CrawlerLimits = null,
    string[] ExclusionFilters = null,
    string[] InclusionFilters = null,
    string Scope = null,
    WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration UrlConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.crawlerLimits">CrawlerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#crawler_limits WisdomKnowledgeBase#crawler_limits}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.exclusionFilters">ExclusionFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#exclusion_filters WisdomKnowledgeBase#exclusion_filters}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.inclusionFilters">InclusionFilters</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#inclusion_filters WisdomKnowledgeBase#inclusion_filters}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#scope WisdomKnowledgeBase#scope}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.urlConfiguration">UrlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#url_configuration WisdomKnowledgeBase#url_configuration}. |

---

##### `CrawlerLimits`<sup>Optional</sup> <a name="CrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.crawlerLimits"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits CrawlerLimits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#crawler_limits WisdomKnowledgeBase#crawler_limits}.

---

##### `ExclusionFilters`<sup>Optional</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.exclusionFilters"></a>

```csharp
public string[] ExclusionFilters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#exclusion_filters WisdomKnowledgeBase#exclusion_filters}.

---

##### `InclusionFilters`<sup>Optional</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.inclusionFilters"></a>

```csharp
public string[] InclusionFilters { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#inclusion_filters WisdomKnowledgeBase#inclusion_filters}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#scope WisdomKnowledgeBase#scope}.

---

##### `UrlConfiguration`<sup>Optional</sup> <a name="UrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration.property.urlConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration UrlConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#url_configuration WisdomKnowledgeBase#url_configuration}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits {
    double RateLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#rate_limit WisdomKnowledgeBase#rate_limit}. |

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#rate_limit WisdomKnowledgeBase#rate_limit}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration {
    IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] SeedUrls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.property.seedUrls">SeedUrls</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#seed_urls WisdomKnowledgeBase#seed_urls}. |

---

##### `SeedUrls`<sup>Optional</sup> <a name="SeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration.property.seedUrls"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] SeedUrls { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#seed_urls WisdomKnowledgeBase#seed_urls}.

---

### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls {
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#url WisdomKnowledgeBase#url}. |

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#url WisdomKnowledgeBase#url}.

---

### WisdomKnowledgeBaseTags <a name="WisdomKnowledgeBaseTags" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#key WisdomKnowledgeBase#key}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#value WisdomKnowledgeBase#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#key WisdomKnowledgeBase#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#value WisdomKnowledgeBase#value}.

---

### WisdomKnowledgeBaseVectorIngestionConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfiguration {
    WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration ChunkingConfiguration = null,
    WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration ParsingConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.chunkingConfiguration">ChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#chunking_configuration WisdomKnowledgeBase#chunking_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.parsingConfiguration">ParsingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_configuration WisdomKnowledgeBase#parsing_configuration}. |

---

##### `ChunkingConfiguration`<sup>Optional</sup> <a name="ChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.chunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration ChunkingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#chunking_configuration WisdomKnowledgeBase#chunking_configuration}.

---

##### `ParsingConfiguration`<sup>Optional</sup> <a name="ParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration.property.parsingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration ParsingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_configuration WisdomKnowledgeBase#parsing_configuration}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration {
    string ChunkingStrategy = null,
    WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration FixedSizeChunkingConfiguration = null,
    WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration HierarchicalChunkingConfiguration = null,
    WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration SemanticChunkingConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.chunkingStrategy">ChunkingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#chunking_strategy WisdomKnowledgeBase#chunking_strategy}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.fixedSizeChunkingConfiguration">FixedSizeChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#fixed_size_chunking_configuration WisdomKnowledgeBase#fixed_size_chunking_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.hierarchicalChunkingConfiguration">HierarchicalChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#hierarchical_chunking_configuration WisdomKnowledgeBase#hierarchical_chunking_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.semanticChunkingConfiguration">SemanticChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#semantic_chunking_configuration WisdomKnowledgeBase#semantic_chunking_configuration}. |

---

##### `ChunkingStrategy`<sup>Optional</sup> <a name="ChunkingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.chunkingStrategy"></a>

```csharp
public string ChunkingStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#chunking_strategy WisdomKnowledgeBase#chunking_strategy}.

---

##### `FixedSizeChunkingConfiguration`<sup>Optional</sup> <a name="FixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.fixedSizeChunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration FixedSizeChunkingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#fixed_size_chunking_configuration WisdomKnowledgeBase#fixed_size_chunking_configuration}.

---

##### `HierarchicalChunkingConfiguration`<sup>Optional</sup> <a name="HierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.hierarchicalChunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration HierarchicalChunkingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#hierarchical_chunking_configuration WisdomKnowledgeBase#hierarchical_chunking_configuration}.

---

##### `SemanticChunkingConfiguration`<sup>Optional</sup> <a name="SemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration.property.semanticChunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration SemanticChunkingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#semantic_chunking_configuration WisdomKnowledgeBase#semantic_chunking_configuration}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
    double MaxTokens = null,
    double OverlapPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.maxTokens">MaxTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.overlapPercentage">OverlapPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#overlap_percentage WisdomKnowledgeBase#overlap_percentage}. |

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}.

---

##### `OverlapPercentage`<sup>Optional</sup> <a name="OverlapPercentage" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration.property.overlapPercentage"></a>

```csharp
public double OverlapPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#overlap_percentage WisdomKnowledgeBase#overlap_percentage}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
    IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] LevelConfigurations = null,
    double OverlapTokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.levelConfigurations">LevelConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#level_configurations WisdomKnowledgeBase#level_configurations}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.overlapTokens">OverlapTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#overlap_tokens WisdomKnowledgeBase#overlap_tokens}. |

---

##### `LevelConfigurations`<sup>Optional</sup> <a name="LevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.levelConfigurations"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] LevelConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#level_configurations WisdomKnowledgeBase#level_configurations}.

---

##### `OverlapTokens`<sup>Optional</sup> <a name="OverlapTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration.property.overlapTokens"></a>

```csharp
public double OverlapTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#overlap_tokens WisdomKnowledgeBase#overlap_tokens}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations {
    double MaxTokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.property.maxTokens">MaxTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}. |

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
    double BreakpointPercentileThreshold = null,
    double BufferSize = null,
    double MaxTokens = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.breakpointPercentileThreshold">BreakpointPercentileThreshold</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#breakpoint_percentile_threshold WisdomKnowledgeBase#breakpoint_percentile_threshold}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.bufferSize">BufferSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#buffer_size WisdomKnowledgeBase#buffer_size}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.maxTokens">MaxTokens</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}. |

---

##### `BreakpointPercentileThreshold`<sup>Optional</sup> <a name="BreakpointPercentileThreshold" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.breakpointPercentileThreshold"></a>

```csharp
public double BreakpointPercentileThreshold { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#breakpoint_percentile_threshold WisdomKnowledgeBase#breakpoint_percentile_threshold}.

---

##### `BufferSize`<sup>Optional</sup> <a name="BufferSize" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.bufferSize"></a>

```csharp
public double BufferSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#buffer_size WisdomKnowledgeBase#buffer_size}.

---

##### `MaxTokens`<sup>Optional</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration.property.maxTokens"></a>

```csharp
public double MaxTokens { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#max_tokens WisdomKnowledgeBase#max_tokens}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration {
    WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration BedrockFoundationModelConfiguration = null,
    string ParsingStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.bedrockFoundationModelConfiguration">BedrockFoundationModelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#bedrock_foundation_model_configuration WisdomKnowledgeBase#bedrock_foundation_model_configuration}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.parsingStrategy">ParsingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_strategy WisdomKnowledgeBase#parsing_strategy}. |

---

##### `BedrockFoundationModelConfiguration`<sup>Optional</sup> <a name="BedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.bedrockFoundationModelConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration BedrockFoundationModelConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#bedrock_foundation_model_configuration WisdomKnowledgeBase#bedrock_foundation_model_configuration}.

---

##### `ParsingStrategy`<sup>Optional</sup> <a name="ParsingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration.property.parsingStrategy"></a>

```csharp
public string ParsingStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_strategy WisdomKnowledgeBase#parsing_strategy}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
    string ModelArn = null,
    WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt ParsingPrompt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.modelArn">ModelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#model_arn WisdomKnowledgeBase#model_arn}. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.parsingPrompt">ParsingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_prompt WisdomKnowledgeBase#parsing_prompt}. |

---

##### `ModelArn`<sup>Optional</sup> <a name="ModelArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.modelArn"></a>

```csharp
public string ModelArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#model_arn WisdomKnowledgeBase#model_arn}.

---

##### `ParsingPrompt`<sup>Optional</sup> <a name="ParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration.property.parsingPrompt"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt ParsingPrompt { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_prompt WisdomKnowledgeBase#parsing_prompt}.

---

### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
    string ParsingPromptText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.property.parsingPromptText">ParsingPromptText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_prompt_text WisdomKnowledgeBase#parsing_prompt_text}. |

---

##### `ParsingPromptText`<sup>Optional</sup> <a name="ParsingPromptText" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt.property.parsingPromptText"></a>

```csharp
public string ParsingPromptText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/wisdom_knowledge_base#parsing_prompt_text WisdomKnowledgeBase#parsing_prompt_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomKnowledgeBaseRenderingConfigurationOutputReference <a name="WisdomKnowledgeBaseRenderingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseRenderingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resetTemplateUri">ResetTemplateUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplateUri` <a name="ResetTemplateUri" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.resetTemplateUri"></a>

```csharp
private void ResetTemplateUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUriInput">TemplateUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri">TemplateUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TemplateUriInput`<sup>Optional</sup> <a name="TemplateUriInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUriInput"></a>

```csharp
public string TemplateUriInput { get; }
```

- *Type:* string

---

##### `TemplateUri`<sup>Required</sup> <a name="TemplateUri" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.templateUri"></a>

```csharp
public string TemplateUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseRenderingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseRenderingConfiguration">WisdomKnowledgeBaseRenderingConfiguration</a>

---


### WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference <a name="WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseServerSideEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseServerSideEncryptionConfiguration">WisdomKnowledgeBaseServerSideEncryptionConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetAppIntegrationArn">ResetAppIntegrationArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetObjectFields">ResetObjectFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppIntegrationArn` <a name="ResetAppIntegrationArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetAppIntegrationArn"></a>

```csharp
private void ResetAppIntegrationArn()
```

##### `ResetObjectFields` <a name="ResetObjectFields" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.resetObjectFields"></a>

```csharp
private void ResetObjectFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArnInput">AppIntegrationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFieldsInput">ObjectFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn">AppIntegrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields">ObjectFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIntegrationArnInput`<sup>Optional</sup> <a name="AppIntegrationArnInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArnInput"></a>

```csharp
public string AppIntegrationArnInput { get; }
```

- *Type:* string

---

##### `ObjectFieldsInput`<sup>Optional</sup> <a name="ObjectFieldsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFieldsInput"></a>

```csharp
public string[] ObjectFieldsInput { get; }
```

- *Type:* string[]

---

##### `AppIntegrationArn`<sup>Required</sup> <a name="AppIntegrationArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.appIntegrationArn"></a>

```csharp
public string AppIntegrationArn { get; }
```

- *Type:* string

---

##### `ObjectFields`<sup>Required</sup> <a name="ObjectFields" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.objectFields"></a>

```csharp
public string[] ObjectFields { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationAppIntegrations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.putWebCrawlerConfiguration">PutWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resetWebCrawlerConfiguration">ResetWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWebCrawlerConfiguration` <a name="PutWebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.putWebCrawlerConfiguration"></a>

```csharp
private void PutWebCrawlerConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.putWebCrawlerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---

##### `ResetWebCrawlerConfiguration` <a name="ResetWebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.resetWebCrawlerConfiguration"></a>

```csharp
private void ResetWebCrawlerConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration">WebCrawlerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfigurationInput">WebCrawlerConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WebCrawlerConfiguration`<sup>Required</sup> <a name="WebCrawlerConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference WebCrawlerConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference</a>

---

##### `WebCrawlerConfigurationInput`<sup>Optional</sup> <a name="WebCrawlerConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.webCrawlerConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration WebCrawlerConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resetRateLimit">ResetRateLimit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putCrawlerLimits">PutCrawlerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putUrlConfiguration">PutUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlerLimits">ResetCrawlerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetExclusionFilters">ResetExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetInclusionFilters">ResetInclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlConfiguration">ResetUrlConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrawlerLimits` <a name="PutCrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putCrawlerLimits"></a>

```csharp
private void PutCrawlerLimits(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putCrawlerLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---

##### `PutUrlConfiguration` <a name="PutUrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putUrlConfiguration"></a>

```csharp
private void PutUrlConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.putUrlConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---

##### `ResetCrawlerLimits` <a name="ResetCrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetCrawlerLimits"></a>

```csharp
private void ResetCrawlerLimits()
```

##### `ResetExclusionFilters` <a name="ResetExclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetExclusionFilters"></a>

```csharp
private void ResetExclusionFilters()
```

##### `ResetInclusionFilters` <a name="ResetInclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetInclusionFilters"></a>

```csharp
private void ResetInclusionFilters()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetUrlConfiguration` <a name="ResetUrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.resetUrlConfiguration"></a>

```csharp
private void ResetUrlConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits">CrawlerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration">UrlConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimitsInput">CrawlerLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFiltersInput">ExclusionFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFiltersInput">InclusionFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfigurationInput">UrlConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters">ExclusionFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters">InclusionFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrawlerLimits`<sup>Required</sup> <a name="CrawlerLimits" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimits"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference CrawlerLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimitsOutputReference</a>

---

##### `UrlConfiguration`<sup>Required</sup> <a name="UrlConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference UrlConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference</a>

---

##### `CrawlerLimitsInput`<sup>Optional</sup> <a name="CrawlerLimitsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.crawlerLimitsInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits CrawlerLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationCrawlerLimits</a>

---

##### `ExclusionFiltersInput`<sup>Optional</sup> <a name="ExclusionFiltersInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFiltersInput"></a>

```csharp
public string[] ExclusionFiltersInput { get; }
```

- *Type:* string[]

---

##### `InclusionFiltersInput`<sup>Optional</sup> <a name="InclusionFiltersInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFiltersInput"></a>

```csharp
public string[] InclusionFiltersInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `UrlConfigurationInput`<sup>Optional</sup> <a name="UrlConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.urlConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration UrlConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---

##### `ExclusionFilters`<sup>Required</sup> <a name="ExclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.exclusionFilters"></a>

```csharp
public string[] ExclusionFilters { get; }
```

- *Type:* string[]

---

##### `InclusionFilters`<sup>Required</sup> <a name="InclusionFilters" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.inclusionFilters"></a>

```csharp
public string[] InclusionFilters { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.putSeedUrls">PutSeedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resetSeedUrls">ResetSeedUrls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSeedUrls` <a name="PutSeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.putSeedUrls"></a>

```csharp
private void PutSeedUrls(IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.putSeedUrls.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]

---

##### `ResetSeedUrls` <a name="ResetSeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.resetSeedUrls"></a>

```csharp
private void ResetSeedUrls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls">SeedUrls</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrlsInput">SeedUrlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SeedUrls`<sup>Required</sup> <a name="SeedUrls" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrls"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList SeedUrls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList</a>

---

##### `SeedUrlsInput`<sup>Optional</sup> <a name="SeedUrlsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.seedUrlsInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] SeedUrlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfiguration</a>

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get"></a>

```csharp
private WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsList.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>[]

---


### WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationWebCrawlerConfigurationUrlConfigurationSeedUrls</a>

---


### WisdomKnowledgeBaseSourceConfigurationOutputReference <a name="WisdomKnowledgeBaseSourceConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putAppIntegrations">PutAppIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putManagedSourceConfiguration">PutManagedSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetAppIntegrations">ResetAppIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetManagedSourceConfiguration">ResetManagedSourceConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppIntegrations` <a name="PutAppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putAppIntegrations"></a>

```csharp
private void PutAppIntegrations(WisdomKnowledgeBaseSourceConfigurationAppIntegrations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putAppIntegrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---

##### `PutManagedSourceConfiguration` <a name="PutManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putManagedSourceConfiguration"></a>

```csharp
private void PutManagedSourceConfiguration(WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.putManagedSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---

##### `ResetAppIntegrations` <a name="ResetAppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetAppIntegrations"></a>

```csharp
private void ResetAppIntegrations()
```

##### `ResetManagedSourceConfiguration` <a name="ResetManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.resetManagedSourceConfiguration"></a>

```csharp
private void ResetManagedSourceConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations">AppIntegrations</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration">ManagedSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrationsInput">AppIntegrationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfigurationInput">ManagedSourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppIntegrations`<sup>Required</sup> <a name="AppIntegrations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrations"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference AppIntegrations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference">WisdomKnowledgeBaseSourceConfigurationAppIntegrationsOutputReference</a>

---

##### `ManagedSourceConfiguration`<sup>Required</sup> <a name="ManagedSourceConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfiguration"></a>

```csharp
public WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference ManagedSourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfigurationOutputReference</a>

---

##### `AppIntegrationsInput`<sup>Optional</sup> <a name="AppIntegrationsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.appIntegrationsInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationAppIntegrations AppIntegrationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationAppIntegrations">WisdomKnowledgeBaseSourceConfigurationAppIntegrations</a>

---

##### `ManagedSourceConfigurationInput`<sup>Optional</sup> <a name="ManagedSourceConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.managedSourceConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration ManagedSourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration">WisdomKnowledgeBaseSourceConfigurationManagedSourceConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseSourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseSourceConfiguration">WisdomKnowledgeBaseSourceConfiguration</a>

---


### WisdomKnowledgeBaseTagsList <a name="WisdomKnowledgeBaseTagsList" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.get"></a>

```csharp
private WisdomKnowledgeBaseTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsList.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>[]

---


### WisdomKnowledgeBaseTagsOutputReference <a name="WisdomKnowledgeBaseTagsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseTags">WisdomKnowledgeBaseTags</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetOverlapPercentage">ResetOverlapPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```

##### `ResetOverlapPercentage` <a name="ResetOverlapPercentage" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.resetOverlapPercentage"></a>

```csharp
private void ResetOverlapPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentageInput">OverlapPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage">OverlapPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `OverlapPercentageInput`<sup>Optional</sup> <a name="OverlapPercentageInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentageInput"></a>

```csharp
public double OverlapPercentageInput { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `OverlapPercentage`<sup>Required</sup> <a name="OverlapPercentage" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.overlapPercentage"></a>

```csharp
public double OverlapPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get"></a>

```csharp
private WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.putLevelConfigurations">PutLevelConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetLevelConfigurations">ResetLevelConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetOverlapTokens">ResetOverlapTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLevelConfigurations` <a name="PutLevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.putLevelConfigurations"></a>

```csharp
private void PutLevelConfigurations(IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.putLevelConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]

---

##### `ResetLevelConfigurations` <a name="ResetLevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetLevelConfigurations"></a>

```csharp
private void ResetLevelConfigurations()
```

##### `ResetOverlapTokens` <a name="ResetOverlapTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.resetOverlapTokens"></a>

```csharp
private void ResetOverlapTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations">LevelConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurationsInput">LevelConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokensInput">OverlapTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens">OverlapTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LevelConfigurations`<sup>Required</sup> <a name="LevelConfigurations" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurations"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList LevelConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationsList</a>

---

##### `LevelConfigurationsInput`<sup>Optional</sup> <a name="LevelConfigurationsInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.levelConfigurationsInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations[] LevelConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurations</a>[]

---

##### `OverlapTokensInput`<sup>Optional</sup> <a name="OverlapTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokensInput"></a>

```csharp
public double OverlapTokensInput { get; }
```

- *Type:* double

---

##### `OverlapTokens`<sup>Required</sup> <a name="OverlapTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.overlapTokens"></a>

```csharp
public double OverlapTokens { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration">PutFixedSizeChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putHierarchicalChunkingConfiguration">PutHierarchicalChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putSemanticChunkingConfiguration">PutSemanticChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetChunkingStrategy">ResetChunkingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetFixedSizeChunkingConfiguration">ResetFixedSizeChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetHierarchicalChunkingConfiguration">ResetHierarchicalChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetSemanticChunkingConfiguration">ResetSemanticChunkingConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFixedSizeChunkingConfiguration` <a name="PutFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration"></a>

```csharp
private void PutFixedSizeChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putFixedSizeChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---

##### `PutHierarchicalChunkingConfiguration` <a name="PutHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putHierarchicalChunkingConfiguration"></a>

```csharp
private void PutHierarchicalChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putHierarchicalChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---

##### `PutSemanticChunkingConfiguration` <a name="PutSemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putSemanticChunkingConfiguration"></a>

```csharp
private void PutSemanticChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.putSemanticChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---

##### `ResetChunkingStrategy` <a name="ResetChunkingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetChunkingStrategy"></a>

```csharp
private void ResetChunkingStrategy()
```

##### `ResetFixedSizeChunkingConfiguration` <a name="ResetFixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetFixedSizeChunkingConfiguration"></a>

```csharp
private void ResetFixedSizeChunkingConfiguration()
```

##### `ResetHierarchicalChunkingConfiguration` <a name="ResetHierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetHierarchicalChunkingConfiguration"></a>

```csharp
private void ResetHierarchicalChunkingConfiguration()
```

##### `ResetSemanticChunkingConfiguration` <a name="ResetSemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.resetSemanticChunkingConfiguration"></a>

```csharp
private void ResetSemanticChunkingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration">FixedSizeChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration">HierarchicalChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration">SemanticChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategyInput">ChunkingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfigurationInput">FixedSizeChunkingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfigurationInput">HierarchicalChunkingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfigurationInput">SemanticChunkingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy">ChunkingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FixedSizeChunkingConfiguration`<sup>Required</sup> <a name="FixedSizeChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference FixedSizeChunkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference</a>

---

##### `HierarchicalChunkingConfiguration`<sup>Required</sup> <a name="HierarchicalChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference HierarchicalChunkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference</a>

---

##### `SemanticChunkingConfiguration`<sup>Required</sup> <a name="SemanticChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference SemanticChunkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference</a>

---

##### `ChunkingStrategyInput`<sup>Optional</sup> <a name="ChunkingStrategyInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategyInput"></a>

```csharp
public string ChunkingStrategyInput { get; }
```

- *Type:* string

---

##### `FixedSizeChunkingConfigurationInput`<sup>Optional</sup> <a name="FixedSizeChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.fixedSizeChunkingConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration FixedSizeChunkingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration</a>

---

##### `HierarchicalChunkingConfigurationInput`<sup>Optional</sup> <a name="HierarchicalChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.hierarchicalChunkingConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration HierarchicalChunkingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration</a>

---

##### `SemanticChunkingConfigurationInput`<sup>Optional</sup> <a name="SemanticChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.semanticChunkingConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration SemanticChunkingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---

##### `ChunkingStrategy`<sup>Required</sup> <a name="ChunkingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.chunkingStrategy"></a>

```csharp
public string ChunkingStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBreakpointPercentileThreshold">ResetBreakpointPercentileThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBufferSize">ResetBufferSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetMaxTokens">ResetMaxTokens</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBreakpointPercentileThreshold` <a name="ResetBreakpointPercentileThreshold" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBreakpointPercentileThreshold"></a>

```csharp
private void ResetBreakpointPercentileThreshold()
```

##### `ResetBufferSize` <a name="ResetBufferSize" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetBufferSize"></a>

```csharp
private void ResetBufferSize()
```

##### `ResetMaxTokens` <a name="ResetMaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.resetMaxTokens"></a>

```csharp
private void ResetMaxTokens()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThresholdInput">BreakpointPercentileThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSizeInput">BufferSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokensInput">MaxTokensInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold">BreakpointPercentileThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize">BufferSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens">MaxTokens</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BreakpointPercentileThresholdInput`<sup>Optional</sup> <a name="BreakpointPercentileThresholdInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThresholdInput"></a>

```csharp
public double BreakpointPercentileThresholdInput { get; }
```

- *Type:* double

---

##### `BufferSizeInput`<sup>Optional</sup> <a name="BufferSizeInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSizeInput"></a>

```csharp
public double BufferSizeInput { get; }
```

- *Type:* double

---

##### `MaxTokensInput`<sup>Optional</sup> <a name="MaxTokensInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokensInput"></a>

```csharp
public double MaxTokensInput { get; }
```

- *Type:* double

---

##### `BreakpointPercentileThreshold`<sup>Required</sup> <a name="BreakpointPercentileThreshold" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.breakpointPercentileThreshold"></a>

```csharp
public double BreakpointPercentileThreshold { get; }
```

- *Type:* double

---

##### `BufferSize`<sup>Required</sup> <a name="BufferSize" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.bufferSize"></a>

```csharp
public double BufferSize { get; }
```

- *Type:* double

---

##### `MaxTokens`<sup>Required</sup> <a name="MaxTokens" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.maxTokens"></a>

```csharp
public double MaxTokens { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putChunkingConfiguration">PutChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putParsingConfiguration">PutParsingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetChunkingConfiguration">ResetChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetParsingConfiguration">ResetParsingConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChunkingConfiguration` <a name="PutChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putChunkingConfiguration"></a>

```csharp
private void PutChunkingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putChunkingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---

##### `PutParsingConfiguration` <a name="PutParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putParsingConfiguration"></a>

```csharp
private void PutParsingConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.putParsingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---

##### `ResetChunkingConfiguration` <a name="ResetChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetChunkingConfiguration"></a>

```csharp
private void ResetChunkingConfiguration()
```

##### `ResetParsingConfiguration` <a name="ResetParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.resetParsingConfiguration"></a>

```csharp
private void ResetParsingConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration">ChunkingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration">ParsingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfigurationInput">ChunkingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfigurationInput">ParsingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChunkingConfiguration`<sup>Required</sup> <a name="ChunkingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference ChunkingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfigurationOutputReference</a>

---

##### `ParsingConfiguration`<sup>Required</sup> <a name="ParsingConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference ParsingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference</a>

---

##### `ChunkingConfigurationInput`<sup>Optional</sup> <a name="ChunkingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.chunkingConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration ChunkingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationChunkingConfiguration</a>

---

##### `ParsingConfigurationInput`<sup>Optional</sup> <a name="ParsingConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.parsingConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration ParsingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfiguration">WisdomKnowledgeBaseVectorIngestionConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.putParsingPrompt">PutParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetModelArn">ResetModelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetParsingPrompt">ResetParsingPrompt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParsingPrompt` <a name="PutParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.putParsingPrompt"></a>

```csharp
private void PutParsingPrompt(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.putParsingPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---

##### `ResetModelArn` <a name="ResetModelArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetModelArn"></a>

```csharp
private void ResetModelArn()
```

##### `ResetParsingPrompt` <a name="ResetParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.resetParsingPrompt"></a>

```csharp
private void ResetParsingPrompt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt">ParsingPrompt</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArnInput">ModelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPromptInput">ParsingPromptInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn">ModelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParsingPrompt`<sup>Required</sup> <a name="ParsingPrompt" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPrompt"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference ParsingPrompt { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference</a>

---

##### `ModelArnInput`<sup>Optional</sup> <a name="ModelArnInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArnInput"></a>

```csharp
public string ModelArnInput { get; }
```

- *Type:* string

---

##### `ParsingPromptInput`<sup>Optional</sup> <a name="ParsingPromptInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.parsingPromptInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt ParsingPromptInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---

##### `ModelArn`<sup>Required</sup> <a name="ModelArn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.modelArn"></a>

```csharp
public string ModelArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resetParsingPromptText">ResetParsingPromptText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParsingPromptText` <a name="ResetParsingPromptText" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.resetParsingPromptText"></a>

```csharp
private void ResetParsingPromptText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptTextInput">ParsingPromptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText">ParsingPromptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ParsingPromptTextInput`<sup>Optional</sup> <a name="ParsingPromptTextInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptTextInput"></a>

```csharp
public string ParsingPromptTextInput { get; }
```

- *Type:* string

---

##### `ParsingPromptText`<sup>Required</sup> <a name="ParsingPromptText" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.parsingPromptText"></a>

```csharp
public string ParsingPromptText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt</a>

---


### WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference <a name="WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.putBedrockFoundationModelConfiguration">PutBedrockFoundationModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetBedrockFoundationModelConfiguration">ResetBedrockFoundationModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetParsingStrategy">ResetParsingStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBedrockFoundationModelConfiguration` <a name="PutBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.putBedrockFoundationModelConfiguration"></a>

```csharp
private void PutBedrockFoundationModelConfiguration(WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.putBedrockFoundationModelConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---

##### `ResetBedrockFoundationModelConfiguration` <a name="ResetBedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetBedrockFoundationModelConfiguration"></a>

```csharp
private void ResetBedrockFoundationModelConfiguration()
```

##### `ResetParsingStrategy` <a name="ResetParsingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.resetParsingStrategy"></a>

```csharp
private void ResetParsingStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration">BedrockFoundationModelConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfigurationInput">BedrockFoundationModelConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategyInput">ParsingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy">ParsingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BedrockFoundationModelConfiguration`<sup>Required</sup> <a name="BedrockFoundationModelConfiguration" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfiguration"></a>

```csharp
public WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference BedrockFoundationModelConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference</a>

---

##### `BedrockFoundationModelConfigurationInput`<sup>Optional</sup> <a name="BedrockFoundationModelConfigurationInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.bedrockFoundationModelConfigurationInput"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration BedrockFoundationModelConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration</a>

---

##### `ParsingStrategyInput`<sup>Optional</sup> <a name="ParsingStrategyInput" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategyInput"></a>

```csharp
public string ParsingStrategyInput { get; }
```

- *Type:* string

---

##### `ParsingStrategy`<sup>Required</sup> <a name="ParsingStrategy" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.parsingStrategy"></a>

```csharp
public string ParsingStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wisdomKnowledgeBase.WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration">WisdomKnowledgeBaseVectorIngestionConfigurationParsingConfiguration</a>

---



